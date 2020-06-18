"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mensaje = exports.desconectar = void 0;
exports.desconectar = function (cliente) {
    cliente.on("disconnect", function () {
        console.log("cliente desconectado");
    });
};
exports.mensaje = function (cliente) {
    cliente.on("mensaje", function (payload) {
        console.log("Mensaje recibido", payload);
    });
};
