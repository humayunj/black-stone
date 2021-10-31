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
const lib_1 = require("./lib");
let f = new lib_1.FluidCMS("AU_OD0CblrGopv1uuEB1j");
// f.getModels()
//   .then((models) => {
//     console.log(JSON.stringify(models, null, 2));
//   })
//   .catch((er: Error) => console.log(er));
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let r = yield f.getAllRecords("616ee0b02ab26775ef1f877f");
        console.log(r);
    }
    catch (er) {
        console.log(er);
    }
}))();
