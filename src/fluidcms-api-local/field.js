import { API } from "./API";
export var ModelFieldType;
(function (ModelFieldType) {
    ModelFieldType[ModelFieldType["Unkown"] = -1] = "Unkown";
    ModelFieldType[ModelFieldType["Text"] = 0] = "Text";
})(ModelFieldType || (ModelFieldType = {}));
export async function getField(token, identifier, modelIdentifier) {
    try {
        let data = await API.get(`/field/${identifier}/${modelIdentifier}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
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
export async function deleteField(token, identifier, modelIdentifier) {
    try {
        let data = await API.delete(`/field/${identifier}/${modelIdentifier}`, {
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
export async function createField(token, modelIdentifier, fieldsData) {
    try {
        let data = await API.post(`/field/${modelIdentifier}`, {
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
export async function updateField(token, fieldIdentifier, modelIdentifier, fieldsData) {
    try {
        let data = await API.patch(`/field/${fieldIdentifier}/${modelIdentifier}`, {
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
