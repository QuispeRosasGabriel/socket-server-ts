import { Socket } from "socket.io";
import socketIO from "socket.io";

export const desconectar = (cliente: Socket) => {
  cliente.on("disconnect", () => {
    console.log("cliente desconectado");
  });
};

export const mensaje = (cliente: Socket, io: socketIO.Server) => {
  cliente.on("mensaje", (payload: { de: string; cuerpo: string }) => {
    console.log("Mensaje recibido", payload);
    io.emit("mensaje-nuevo", payload);
  });
};

//Configurar usuario
export const configurarUsuario = (cliente: Socket, io: socketIO.Server) => {
  cliente.on("configurar-usuario", (payload: { nombre: string }) => {
    console.log("configurando usuario", payload.nombre);
    // io.emit("mensaje-nuevo", payload);
  });
};
