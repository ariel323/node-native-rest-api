const { parse } = require("url");
const {
  getAll,
  getOne,
  create,
  updateFull,
  updatePartial,
  remove,
} = require("../controllers/productosController");

function handleProductosRoutes(req, res) {
  const { pathname } = parse(req.url, true);
  const method = req.method;

  // /productos
  if (pathname === "/productos" && method === "GET") return getAll(req, res);
  if (pathname === "/productos" && method === "POST") return create(req, res);

  // /productos/:id
  const match = pathname.match(/^\/productos\/(\d+)$/);
  if (match) {
    req.params = { id: Number(match[1]) };

    if (method === "GET") return getOne(req, res);
    if (method === "PUT") return updateFull(req, res);
    if (method === "PATCH") return updatePartial(req, res);
    if (method === "DELETE") return remove(req, res);
  }

  return false; // Ruta no manejada
}

module.exports = { handleProductosRoutes };
