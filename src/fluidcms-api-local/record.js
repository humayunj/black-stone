import { API } from "./API";
export async function getRecord(token, uid) {
    try {
        let data = await API.get(`/record/${uid}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        let respRecord = {
            uid: uid,
            modelIdentifier: data.model_alias,
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
}
export async function getRecords(token, modelIdentifier) {
    try {
        let data = await API.get(`/record/all/${modelIdentifier}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const records = data;
        let respRecords = [];
        for (let m of records) {
            respRecords.push({
                uid: m._id,
                modelIdentifier: modelIdentifier,
                fields: m.fields.map((f) => ({
                    fieldIdentifier: f.field_alias,
                    value: f.value,
                })),
            });
        }
        return respRecords;
    }
    catch (er) {
        throw er;
    }
}
export async function updateRecord(token, recordUID, fieldsData) {
    try {
        let data = await API.patch("/record/" + recordUID, {
            fields: fieldsData.map((f, i) => ({
                field_alias: f.fieldIdentifier,
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
}
export async function createRecord(token, modelIdentifier, fieldsData) {
    try {
        let data = await API.post(`/record/${modelIdentifier}`, {
            fields: fieldsData.map((f, i) => ({
                field_alias: f.fieldIdentifier,
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
}
export async function uploadRecordImage(token, image) {
    let fd = new FormData();
    fd.append("image", image);
    try {
        let data = await API.post("/image", fd, {
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
}
export async function getMedia(token, mediaID) {
    try {
        let data = await API.get("/media/" + mediaID, {
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
}
export async function deleteRecord(token, recordUID) {
    try {
        let data = await API.delete("/record/" + recordUID, {
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
export async function deleteMultipleRecords(token, recordUIDs) {
    try {
        let data = await API.delete("/record", {
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
}
