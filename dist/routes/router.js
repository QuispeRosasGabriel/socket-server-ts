"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
exports.router = express_1.Router();
exports.router.get("/mensajes", function (reqt, res) {
    res.json({
        ok: true,
        mensaje: "todo esta bien",
    });
});
exports.router.post("/mensajes", function (reqt, res) {
    res.json({
        ok: true,
        mensaje: "POST LISTO",
    });
});
