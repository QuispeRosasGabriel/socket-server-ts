"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configurarUsuario = exports.mensaje = exports.desconectar = void 0;
exports.desconectar = function (cliente) {
    cliente.on("disconnect", function () {
        console.log("cliente desconectado");
    });
};
exports.mensaje = function (cliente, io) {
    cliente.on("mensaje", function (payload) {
        console.log("Mensaje recibido", payload);
        io.emit("mensaje-nuevo", payload);
    });
};
//Configurar usuario
exports.configurarUsuario = function (cliente, io) {
    cliente.on("configurar-usuario", function (payload) {
        console.log("configurando usuario", payload.nombre);
        // io.emit("mensaje-nuevo", payload);
    });
};
