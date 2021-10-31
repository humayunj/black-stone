import { API } from "./API";
export var ModelFieldType;
(function (ModelFieldType) {
    ModelFieldType[ModelFieldType["Unkown"] = -1] = "Unkown";
    ModelFieldType[ModelFieldType["Text"] = 0] = "Text";
})(ModelFieldType || (ModelFieldType = {}));
export async function getField(token, uid) {
    try {
        let data = await API.get(`/field/${uid}`);
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
}
export async function deleteField(token, uid) {
    try {
        let data = await API.delete(`/field/${uid}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return true;
    }
    catch (er) {
        throw er;
    }
}
export async function createField(token, modelID, fieldsData) {
    try {
        let data = await API.post(`/field`, {
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
}
export async function updateField(token, fieldID, fieldsData) {
    try {
        let data = await API.patch(`/field/${fieldID}`, {
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
}
