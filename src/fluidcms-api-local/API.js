import axios from "axios";
export const URL = `https://api-fluidcms.herokuapp.com`;
// export const URL = `http://localhost:3001`;
export class APIResponseError extends Error {
    constructor(msg, code) {
        super(msg || "Unknown API response error.");
        this.code = code || 500;
    }
}
export const API = {
    get(uri, config) {
        return new Promise((resolve, reject) => {
            axios
                .get(URL + uri, config)
                .then((r) => {
                let data = r.data;
                if (!data.ok || !data.data) {
                    reject(new APIResponseError(data?.error || "Unknwon API response error", 500));
                }
                resolve(data.data);
            })
                .catch((er) => {
                reject(new APIResponseError(er.response?.data?.error ||
                    er.response?.data ||
                    er.message, er.response?.status || 500));
            });
        });
    },
    put(uri, data, config) {
        return new Promise((resolve, reject) => {
            axios
                .put(URL + uri, data, config)
                .then((r) => {
                let data = r.data;
                if (!data.ok || !data.data) {
                    reject(new APIResponseError(data?.error || "Unknwon API response error", 500));
                }
                resolve(data.data);
            })
                .catch((er) => {
                reject(new APIResponseError(er.response?.data?.error ||
                    er.response?.data ||
                    er.message, er.response?.status || 500));
            });
        });
    },
    post(uri, data, config) {
        return new Promise((resolve, reject) => {
            axios
                .post(URL + uri, data, config)
                .then((r) => {
                let data = r.data;
                if (!data.ok || !data.data) {
                    reject(new APIResponseError(data?.error || "Unknwon API response error", 500));
                }
                resolve(data.data);
            })
                .catch((er) => {
                reject(new APIResponseError(er.response?.data?.error ||
                    er.response?.data ||
                    er.message, er.response?.status || 500));
            });
        });
    },
    patch(uri, data, config) {
        return new Promise((resolve, reject) => {
            axios
                .patch(URL + uri, data, config)
                .then((r) => {
                let data = r.data;
                if (!data.ok || !data.data) {
                    reject(new APIResponseError(data?.error || "Unknwon API response error", 500));
                }
                resolve(data.data);
            })
                .catch((er) => {
                reject(new APIResponseError(er.response?.data?.error ||
                    er.response?.data ||
                    er.message, er.response?.status || 500));
            });
        });
    },
    delete(uri, config) {
        return new Promise((resolve, reject) => {
            axios
                .delete(URL + uri, config)
                .then((r) => {
                let data = r.data;
                if (!data.ok || !data.data) {
                    reject(new APIResponseError(data?.error || "Unknwon API response error", 500));
                }
                resolve(data.data);
            })
                .catch((er) => {
                reject(new APIResponseError(er.response?.data?.error ||
                    er.response?.data ||
                    er.message, er.response?.status || 500));
            });
        });
    },
};
