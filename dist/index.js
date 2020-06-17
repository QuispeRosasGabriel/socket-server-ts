"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./classes/server"));
var router_1 = require("./routes/router");
var server = new server_1.default();
server.app.use("/", router_1.router);
server.start(function () {
    console.log("Server esta corriendo en : " + server.port);
});
