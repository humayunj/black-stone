import { API, APIResponseError } from "./API";
export async function getModel(token, uid) {
    try {
        let data = await API.get(`/model/${uid}`, {
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
}
export async function getModels(token, projectId) {
    try {
        let data = await API.get(`/model/all`, {
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
}
export async function updateModel(token, modelUID, fieldsData) {
    try {
        let data = await API.patch("/model/" + modelUID, {
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
}
export async function createModel(token, fieldsData) {
    try {
        let data = await API.post("/model", {
            name: fieldsData.title,
            alias: fieldsData.identifier,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (!data.model_id)
            throw new APIResponseError("Something went wrong");
        return data.model_id;
    }
    catch (er) {
        throw er;
    }
}
export async function deleteModel(token, modelUID) {
    try {
        let data = await API.delete("/model/" + modelUID, {
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
