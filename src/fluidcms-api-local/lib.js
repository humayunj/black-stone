import { createField, deleteField, getField, updateField } from "./field";
import { getModel, getModels, updateModel, deleteModel, createModel as _createModel, } from "./model";
import { createRecord, deleteMultipleRecords, deleteRecord, getMedia, getRecord, getRecords, updateRecord, uploadRecordImage, } from "./record";
export class FluidCMS {
    constructor(token) {
        this.updateModel = (modelUID, fieldsData) => {
            return updateModel(this.token, modelUID, fieldsData);
        };
        this.deleteModel = (modelUID) => {
            return deleteModel(this.token, modelUID);
        };
        this.token = token;
    }
    /**
     * Get a model by ID
     * @param uid Model Unique ID
     * @returns Promise whic resolve to IModel or rejected with APIResponseError
     */
    getModel(uid) {
        return getModel(this.token, uid);
    }
    createModel(fieldsData) {
        return _createModel(this.token, fieldsData);
    }
    getModels() {
        return getModels(this.token, this.token);
    }
    createField(modelID, fieldsData) {
        return createField(this.token, modelID, fieldsData);
    }
    updateField(fieldID, fieldsData) {
        return updateField(this.token, fieldID, fieldsData);
    }
    getField(fieldID) {
        return getField(this.token, fieldID);
    }
    deleteField(fieldID) {
        return deleteField(this.token, fieldID);
    }
    createRecord(modelUID, fieldsData) {
        return createRecord(this.token, modelUID, fieldsData);
    }
    updateRecord(recordIUD, fieldsData) {
        return updateRecord(this.token, recordIUD, fieldsData);
    }
    deleteRecord(recordUID) {
        return deleteRecord(this.token, recordUID);
    }
    deleteMultipleRecords(recordUID) {
        return deleteMultipleRecords(this.token, recordUID);
    }
    uploadRecordImage(image) {
        return uploadRecordImage(this.token, image);
    }
    getMedia(mediaID) {
        return getMedia(this.token, mediaID);
    }
    getRecord(recordUID) {
        return getRecord(this.token, recordUID);
    }
    getAllRecords(modelUID) {
        return getRecords(this.token, modelUID);
    }
}
