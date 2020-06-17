"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
exports.router = express_1.Router();
// ===================================
//GET MENSAJES
// ===================================
exports.router.get("/mensajes", function (req, res) {
    res.json({
        ok: true,
        mensaje: "todo esta bien",
    });
});
// ===================================
//POST MENSAJES
// ===================================
exports.router.post("/mensajes", function (req, res) {
    var cuerpo = req.body.cuerpo;
    var de = req.body.de;
    res.json({
        ok: true,
        cuerpo: cuerpo,
        de: de,
    });
});
// ===================================
//POST MENSAJES/:id
// ===================================
exports.router.post("/mensajes/:id", function (req, res) {
    var id = req.params.id;
    var cuerpo = req.body.cuerpo;
    var de = req.body.de;
    res.json({
        ok: true,
        id: id,
        cuerpo: cuerpo,
        de: de,
    });
});
