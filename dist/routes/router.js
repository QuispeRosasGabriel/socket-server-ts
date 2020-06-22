"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var server_1 = __importDefault(require("../classes/server"));
var socket_1 = require("../sockets/socket");
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
    var payload = {
        cuerpo: cuerpo,
        de: de,
    };
    var server = server_1.default.instance;
    server.io.emit("mensaje-nuevo", payload);
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
    var payload = {
        de: de,
        cuerpo: cuerpo,
    };
    var server = server_1.default.instance;
    server.io.in(id).emit("mensaje-privado", payload);
    res.json({
        ok: true,
        id: id,
        cuerpo: cuerpo,
        de: de,
    });
});
//Servicio para obtener el id de todos los usuarios
exports.router.get("/usuarios", function (req, res) {
    var server = server_1.default.instance;
    server.io.clients(function (err, clientes) {
        if (err) {
            return res.json({
                ok: false,
                err: err,
            });
        }
        res.json({
            ok: true,
            clientes: clientes,
        });
    });
});
//Obtener usuarios y sus nombres
exports.router.get("/usuarios/detalle", function (req, res) {
    var clientes = socket_1.usuariosConectados.getLista();
    res.json({
        ok: true,
        clientes: clientes,
    });
});
