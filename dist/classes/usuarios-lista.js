"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosLista = void 0;
var UsuariosLista = /** @class */ (function () {
    function UsuariosLista() {
        this.lista = [];
    }
    //Agregar usuario
    UsuariosLista.prototype.agregar = function (usuario) {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    };
    UsuariosLista.prototype.actualizarNombre = function (id, nombre) {
        for (var _i = 0, _a = this.lista; _i < _a.length; _i++) {
            var usuario = _a[_i];
            if (usuario.id === id) {
                usuario.nombre = nombre;
                break;
            }
        }
        console.log("==========Actualizando usuario==============");
        console.log(this.lista);
    };
    //obtener lista de usuarios
    UsuariosLista.prototype.getLista = function () {
        return this.lista;
    };
    UsuariosLista.prototype.getUsuario = function (id) {
        return this.lista.find(function (usuario) { return usuario.id === id; });
    };
    //Obtener usuarios en una sala especifica
    UsuariosLista.prototype.getUsuarioSala = function (sala) {
        return this.lista.filter(function (usuario) { return usuario.sala === sala; });
    };
    //Borrar un usuario cuando se desconecte
    UsuariosLista.prototype.borrarUsuario = function (id) {
        var tempUsuario = this.getUsuario(id);
        this.lista = this.lista.filter(function (usuario) { return usuario.id !== id; });
        return tempUsuario;
    };
    return UsuariosLista;
}());
exports.UsuariosLista = UsuariosLista;
