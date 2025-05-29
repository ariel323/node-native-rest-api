const http = require("http");
const { handleProductosRoutes } = require("./routes/productosRoutes");
const { sendJson } = require("./utils/response");

const server = http.createServer((req, res) => {
  const handled = handleProductosRoutes(req, res);

  if (!handled) {
    sendJson(res, 404, { error: "Ruta no válida" });
  }
});

server.listen(3000, () => {
  console.log("Servidor iniciado en puerto 3000");
});
