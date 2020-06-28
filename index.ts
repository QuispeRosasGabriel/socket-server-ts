import Server from "./classes/server";
import { router } from "./routes/router";
import bodyParser from "body-parser";
import cors from "cors";

const server = Server.instance;

//Body-Parser
server.app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
server.app.use(bodyParser.json());

// CORS
server.app.use(cors({ origin: true, credentials: true }));
// Configurar cabeceras y cors
// server.app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

//RUTAS
server.app.use("/", router);

server.start(() => {
  console.log(`Server esta corriendo en : ${server.port}`);
});
