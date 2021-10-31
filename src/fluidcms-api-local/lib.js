"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FluidCMS = void 0;
const field_1 = require("./field");
const model_1 = require("./model");
const record_1 = require("./record");
class FluidCMS {
    constructor(token) {
        this.updateModel = (modelUID, fieldsData) => {
            return (0, model_1.updateModel)(this.token, modelUID, fieldsData);
        };
        this.deleteModel = (modelUID) => {
            return (0, model_1.deleteModel)(this.token, modelUID);
        };
        this.token = token;
    }
    /**
     * Get a model by ID
     * @param uid Model Unique ID
     * @returns Promise whic resolve to IModel or rejected with APIResponseError
     */
    getModel(uid) {
        return (0, model_1.getModel)(this.token, uid);
    }
    createModel(fieldsData) {
        return (0, model_1.createModel)(this.token, fieldsData);
    }
    getModels() {
        return (0, model_1.getModels)(this.token, this.token);
    }
    createField(modelID, fieldsData) {
        return (0, field_1.createField)(this.token, modelID, fieldsData);
    }
    updateField(fieldID, fieldsData) {
        return (0, field_1.updateField)(this.token, fieldID, fieldsData);
    }
    getField(fieldID) {
        return (0, field_1.getField)(this.token, fieldID);
    }
    deleteField(fieldID) {
        return (0, field_1.deleteField)(this.token, fieldID);
    }
    createRecord(modelUID, fieldsData) {
        return (0, record_1.createRecord)(this.token, modelUID, fieldsData);
    }
    updateRecord(recordIUD, fieldsData) {
        return (0, record_1.updateRecord)(this.token, recordIUD, fieldsData);
    }
    deleteRecord(recordUID) {
        return (0, record_1.deleteRecord)(this.token, recordUID);
    }
    deleteMultipleRecords(recordUID) {
        return (0, record_1.deleteMultipleRecords)(this.token, recordUID);
    }
    uploadRecordImage(image) {
        return (0, record_1.uploadRecordImage)(this.token, image);
    }
    getMedia(mediaID) {
        return (0, record_1.getMedia)(this.token, mediaID);
    }
    getRecord(recordUID) {
        return (0, record_1.getRecord)(this.token, recordUID);
    }
    getAllRecords(modelUID) {
        return (0, record_1.getRecords)(this.token, modelUID);
    }
}
exports.FluidCMS = FluidCMS;
