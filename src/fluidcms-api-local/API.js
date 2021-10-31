"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = exports.APIResponseError = exports.URL = void 0;
const axios_1 = __importDefault(require("axios"));
exports.URL = `https://api-fluidcms.herokuapp.com`;
class APIResponseError extends Error {
    constructor(msg, code) {
        super(msg || "Unknown API response error.");
        this.code = code || 500;
    }
}
exports.APIResponseError = APIResponseError;
exports.API = {
    get(uri, config) {
        return new Promise((resolve, reject) => {
            axios_1.default
                .get(exports.URL + uri, config)
                .then((r) => {
                let data = r.data;
                if (!data.ok || !data.data) {
                    reject(new APIResponseError((data === null || data === void 0 ? void 0 : data.error) || "Unknwon API response error", 500));
                }
                resolve(data.data);
            })
                .catch((er) => {
                var _a, _b, _c, _d;
                reject(new APIResponseError(((_b = (_a = er.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) ||
                    ((_c = er.response) === null || _c === void 0 ? void 0 : _c.data) ||
                    er.message, ((_d = er.response) === null || _d === void 0 ? void 0 : _d.status) || 500));
            });
        });
    },
    put(uri, data, config) {
        return new Promise((resolve, reject) => {
            axios_1.default
                .put(exports.URL + uri, data, config)
                .then((r) => {
                let data = r.data;
                if (!data.ok || !data.data) {
                    reject(new APIResponseError((data === null || data === void 0 ? void 0 : data.error) || "Unknwon API response error", 500));
                }
                resolve(data.data);
            })
                .catch((er) => {
                var _a, _b, _c, _d;
                reject(new APIResponseError(((_b = (_a = er.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) ||
                    ((_c = er.response) === null || _c === void 0 ? void 0 : _c.data) ||
                    er.message, ((_d = er.response) === null || _d === void 0 ? void 0 : _d.status) || 500));
            });
        });
    },
    post(uri, data, config) {
        return new Promise((resolve, reject) => {
            axios_1.default
                .post(exports.URL + uri, data, config)
                .then((r) => {
                let data = r.data;
                if (!data.ok || !data.data) {
                    reject(new APIResponseError((data === null || data === void 0 ? void 0 : data.error) || "Unknwon API response error", 500));
                }
                resolve(data.data);
            })
                .catch((er) => {
                var _a, _b, _c, _d;
                reject(new APIResponseError(((_b = (_a = er.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) ||
                    ((_c = er.response) === null || _c === void 0 ? void 0 : _c.data) ||
                    er.message, ((_d = er.response) === null || _d === void 0 ? void 0 : _d.status) || 500));
            });
        });
    },
    patch(uri, data, config) {
        return new Promise((resolve, reject) => {
            axios_1.default
                .patch(exports.URL + uri, data, config)
                .then((r) => {
                let data = r.data;
                if (!data.ok || !data.data) {
                    reject(new APIResponseError((data === null || data === void 0 ? void 0 : data.error) || "Unknwon API response error", 500));
                }
                resolve(data.data);
            })
                .catch((er) => {
                var _a, _b, _c, _d;
                reject(new APIResponseError(((_b = (_a = er.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) ||
                    ((_c = er.response) === null || _c === void 0 ? void 0 : _c.data) ||
                    er.message, ((_d = er.response) === null || _d === void 0 ? void 0 : _d.status) || 500));
            });
        });
    },
    delete(uri, config) {
        return new Promise((resolve, reject) => {
            axios_1.default
                .delete(exports.URL + uri, config)
                .then((r) => {
                let data = r.data;
                if (!data.ok || !data.data) {
                    reject(new APIResponseError((data === null || data === void 0 ? void 0 : data.error) || "Unknwon API response error", 500));
                }
                resolve(data.data);
            })
                .catch((er) => {
                var _a, _b, _c, _d;
                reject(new APIResponseError(((_b = (_a = er.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) ||
                    ((_c = er.response) === null || _c === void 0 ? void 0 : _c.data) ||
                    er.message, ((_d = er.response) === null || _d === void 0 ? void 0 : _d.status) || 500));
            });
        });
    },
};
