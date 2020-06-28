"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerUsuarios = exports.configurarUsuario = exports.mensaje = exports.desconectar = exports.conectarCliente = exports.usuariosConectados = void 0;
var usuarios_lista_1 = require("../classes/usuarios-lista");
var usuario_1 = require("../classes/usuario");
exports.usuariosConectados = new usuarios_lista_1.UsuariosLista();
exports.conectarCliente = function (cliente, io) {
    var usuario = new usuario_1.Usuario(cliente.id);
    exports.usuariosConectados.agregar(usuario);
};
exports.desconectar = function (cliente, io) {
    cliente.on("disconnect", function () {
        console.log("cliente desconectado");
        exports.usuariosConectados.borrarUsuario(cliente.id);
        io.emit("usuarios-activos", exports.usuariosConectados.getLista());
    });
};
exports.mensaje = function (cliente, io) {
    cliente.on("mensaje", function (payload) {
        console.log("Mensaje recibido", payload);
        io.emit("mensaje-nuevo", payload);
    });
};
// Configurar usuario
exports.configurarUsuario = function (cliente, io) {
    cliente.on("configurar-usuario", function (payload, callback) {
        exports.usuariosConectados.actualizarNombre(cliente.id, payload.nombre);
        io.emit("usuarios-activos", exports.usuariosConectados.getLista());
        callback({
            ok: true,
            mensaje: "Usuario " + payload.nombre + ", configurado",
        });
    });
};
// Obtener Usuarios
exports.obtenerUsuarios = function (cliente, io) {
    cliente.on("obtener-usuarios", function () {
        io.to(cliente.id).emit("usuarios-activos", exports.usuariosConectados.getLista());
    });
};
