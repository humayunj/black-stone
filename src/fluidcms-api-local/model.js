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
exports.deleteModel = exports.createModel = exports.updateModel = exports.getModels = exports.getModel = void 0;
const API_1 = require("./API");
function getModel(token, uid) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield API_1.API.get(`/model/${uid}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const m = data.model;
            let respModel = {
                uid: uid,
                title: m.name,
                identifier: m.alias,
                fields: m.fields.map((f) => ({
                    uid: f._id,
                    name: f.name,
                    identifier: f.alias,
                    type: f.field_type,
                    validation: {
                        isRequired: f.validation.isRquired || false,
                        regex: f.validation.regex || "",
                    },
                })),
            };
            return respModel;
        }
        catch (er) {
            throw er;
        }
    });
}
exports.getModel = getModel;
function getModels(token, projectId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield API_1.API.get(`/model/all`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const models = data.models;
            let respModels = [];
            for (let m of models) {
                respModels.push({
                    uid: m._id,
                    title: m.name,
                    identifier: m.alias,
                    fields: m.fields.map((f) => ({
                        uid: f._id,
                        title: f.name,
                        identifier: f.alias,
                        type: f.field_type,
                        validation: {
                            isRequired: f.validation.isRquired || false,
                            regex: f.validation.regex || "",
                        },
                    })),
                });
            }
            return respModels;
        }
        catch (er) {
            throw er;
        }
    });
}
exports.getModels = getModels;
function updateModel(token, modelUID, fieldsData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield API_1.API.patch("/model/" + modelUID, {
                name: fieldsData.title,
                alias: fieldsData.identifier,
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
exports.updateModel = updateModel;
function createModel(token, fieldsData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield API_1.API.post("/model", {
                name: fieldsData.title,
                alias: fieldsData.identifier,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!data.model_id)
                throw new API_1.APIResponseError("Something went wrong");
            return data.model_id;
        }
        catch (er) {
            throw er;
        }
    });
}
exports.createModel = createModel;
function deleteModel(token, modelUID) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield API_1.API.delete("/model/" + modelUID, {
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
exports.deleteModel = deleteModel;
