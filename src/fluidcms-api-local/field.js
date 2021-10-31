"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateField = exports.createField = exports.deleteField = exports.getField = exports.ModelFieldType = void 0;
const API_1 = require("./API");
var ModelFieldType;
(function (ModelFieldType) {
    ModelFieldType[ModelFieldType["Unkown"] = -1] = "Unkown";
    ModelFieldType[ModelFieldType["Text"] = 0] = "Text";
})(ModelFieldType = exports.ModelFieldType || (exports.ModelFieldType = {}));
function getField(token, uid) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield API_1.API.get(`/field/${uid}`);
            const m = data;
            let respField = {
                uid: m._id,
                title: m.name,
                identifier: m.alias,
                type: m.field_type,
                validation: {
                    isRequired: m.regex || false,
                    regex: m.regex || "",
                },
            };
            return respField;
        }
        catch (er) {
            throw er;
        }
    });
}
exports.getField = getField;
function deleteField(token, uid) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield API_1.API.delete(`/field/${uid}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return true;
        }
        catch (er) {
            throw er;
        }
    });
}
exports.deleteField = deleteField;
function createField(token, modelID, fieldsData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield API_1.API.post(`/field`, {
                model_id: modelID,
                alias: fieldsData.identifier,
                name: fieldsData.title,
                field_type: fieldsData.type,
                validation: {
                    isRquired: fieldsData.validation.isRequired,
                    regex: fieldsData.validation.regex,
                },
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return {
                uid: data.field_id,
                identifier: fieldsData.identifier,
                title: fieldsData.title,
                type: fieldsData.type,
                validation: fieldsData.validation,
            };
        }
        catch (er) {
            throw er;
        }
    });
}
exports.createField = createField;
function updateField(token, fieldID, fieldsData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield API_1.API.patch(`/field/${fieldID}`, {
                alias: fieldsData.identifier,
                name: fieldsData.title,
                field_type: fieldsData.type,
                validation: fieldsData.validation,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return true;
        }
        catch (er) {
            throw er;
        }
    });
}
exports.updateField = updateField;
