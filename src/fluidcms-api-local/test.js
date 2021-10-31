"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
let f = new index_1.FluidCMS("616215249838a720d007bb4a");
f.getModels()
    .then((models) => {
    console.log(models);
})
    .catch((er) => console.log(er));
