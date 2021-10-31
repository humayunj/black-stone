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
exports.deleteMultipleRecords = exports.deleteRecord = exports.getMedia = exports.uploadRecordImage = exports.createRecord = exports.updateRecord = exports.getRecords = exports.getRecord = void 0;
const API_1 = require("./API");
function getRecord(token, uid) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield API_1.API.get(`/record/${uid}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            let respRecord = {
                uid: uid,
                modelId: data.model_id,
                fields: data.fields.map((f) => ({
                    fieldId: f.field_id,
                    value: f.value,
                })),
            };
            return respRecord;
        }
        catch (er) {
            throw er;
        }
    });
}
exports.getRecord = getRecord;
function getRecords(token, modelUID) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield API_1.API.get(`/record/all/${modelUID}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const records = data;
            let respRecords = [];
            for (let m of records) {
                respRecords.push({
                    uid: m._id,
                    modelId: modelUID,
                    fields: m.fields.map((f) => ({
                        fieldId: f.field_id,
                        value: f.value,
                    })),
                });
            }
            return respRecords;
        }
        catch (er) {
            throw er;
        }
    });
}
exports.getRecords = getRecords;
function updateRecord(token, recordUID, fieldsData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield API_1.API.patch("/record/" + recordUID, {
                fields: fieldsData.map((f, i) => ({
                    field_id: f.fieldId,
                    value: f.value,
                })),
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
exports.updateRecord = updateRecord;
function createRecord(token, modelId, fieldsData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield API_1.API.post("/record", {
                model_id: modelId,
                fields: fieldsData.map((f, i) => ({
                    field_id: f.fieldId,
                    value: f.value,
                })),
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return data._id;
        }
        catch (er) {
            throw er;
        }
    });
}
exports.createRecord = createRecord;
function uploadRecordImage(token, image) {
    return __awaiter(this, void 0, void 0, function* () {
        let fd = new FormData();
        fd.append("image", image);
        try {
            let data = yield API_1.API.post("/image", fd, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return {
                uid: data._id,
                sm: data.sm,
                md: data.md,
                raw: data.raw,
            };
        }
        catch (er) {
            throw er;
        }
    });
}
exports.uploadRecordImage = uploadRecordImage;
function getMedia(token, mediaID) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield API_1.API.get("/media/" + mediaID, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return {
                uid: data._id,
                sm: data.sm,
                md: data.md,
                raw: data.raw,
            };
        }
        catch (er) {
            throw er;
        }
    });
}
exports.getMedia = getMedia;
function deleteRecord(token, recordUID) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield API_1.API.delete("/record/" + recordUID, {
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
exports.deleteRecord = deleteRecord;
function deleteMultipleRecords(token, recordUIDs) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield API_1.API.delete("/record", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: {
                    ids: recordUIDs,
                },
            });
            return true;
        }
        catch (er) {
            throw er;
        }
    });
}
exports.deleteMultipleRecords = deleteMultipleRecords;
