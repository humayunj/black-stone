import { createField, deleteField, getField, updateField } from "./field";
import { getModel, getModels, updateModel, deleteModel, createModel as _createModel, } from "./model";
import { createRecord, deleteMultipleRecords, deleteRecord, getMedia, getRecord, getRecords, updateRecord, uploadRecordImage, } from "./record";
export class FluidCMS {
    constructor(token) {
        this.updateModel = (modelIdentifier, fieldsData) => {
            return updateModel(this.token, modelIdentifier, fieldsData);
        };
        this.deleteModel = (modelIdentifier) => {
            return deleteModel(this.token, modelIdentifier);
        };
        this.token = token;
    }
    /**
     * Get a model by ID
     * @param uid Model Unique ID
     * @returns Promise whic resolve to IModel or rejected with APIResponseError
     */
    getModel(modelIdentifier) {
        return getModel(this.token, modelIdentifier);
    }
    createModel(fieldsData) {
        return _createModel(this.token, fieldsData);
    }
    getModels() {
        return getModels(this.token, this.token);
    }
    createField(modelIdentifier, fieldsData) {
        return createField(this.token, modelIdentifier, fieldsData);
    }
    updateField(fieldIdentifier, modelIdentifier, fieldsData) {
        return updateField(this.token, fieldIdentifier, modelIdentifier, fieldsData);
    }
    getField(fieldIdentifier, modelIdentifier) {
        return getField(this.token, fieldIdentifier, modelIdentifier);
    }
    deleteField(fieldIdentifier, modelIdentifier) {
        return deleteField(this.token, fieldIdentifier, modelIdentifier);
    }
    createRecord(modelIdentifier, fieldsData) {
        return createRecord(this.token, modelIdentifier, fieldsData);
    }
    updateRecord(recordUID, fieldsData) {
        return updateRecord(this.token, recordUID, fieldsData);
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
    getAllRecords(modelIdentifier) {
        return getRecords(this.token, modelIdentifier);
    }
}
