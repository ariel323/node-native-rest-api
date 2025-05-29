const fs = require("fs");
const path = require("path");
const { sendJson } = require("../utils/response");

const FILE = path.join(__dirname, "../data/productos.json");

function readProductos() {
  try {
    const data = fs.readFileSync(FILE, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveProductos(productos) {
  fs.writeFileSync(FILE, JSON.stringify(productos, null, 2));
}

function parseBody(req, callback) {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => {
    try {
      const parsed = JSON.parse(body);
      callback(null, parsed);
    } catch (err) {
      callback(err);
    }
  });
}

function getAll(req, res) {
  const productos = readProductos();
  sendJson(res, 200, { data: productos });
}

function getOne(req, res) {
  const id = req.params.id;
  const producto = readProductos().find((p) => p.id === id);
  if (!producto) return sendJson(res, 404, { error: "Producto no encontrado" });
  sendJson(res, 200, { data: producto });
}

function create(req, res) {
  parseBody(req, (err, body) => {
    if (err) return sendJson(res, 400, { error: "JSON inválido" });

    const { nombre, precio } = body;
    if (!nombre || typeof precio !== "number")
      return sendJson(res, 400, { error: "Datos inválidos" });

    const productos = readProductos();
    const nuevo = {
      id: productos.length ? productos[productos.length - 1].id + 1 : 1,
      nombre,
      precio,
    };

    productos.push(nuevo);
    saveProductos(productos);
    sendJson(res, 201, { data: productos });
  });
}

function updateFull(req, res) {
  const id = req.params.id;
  parseBody(req, (err, body) => {
    if (err) return sendJson(res, 400, { error: "JSON inválido" });

    const { nombre, precio } = body;
    if (!nombre || typeof precio !== "number")
      return sendJson(res, 400, { error: "Datos inválidos" });

    const productos = readProductos();
    const index = productos.findIndex((p) => p.id === id);
    if (index === -1)
      return sendJson(res, 404, { error: "Producto no encontrado" });

    productos[index] = { id, nombre, precio };
    saveProductos(productos);
    sendJson(res, 200, { data: productos[index] });
  });
}

function updatePartial(req, res) {
  const id = req.params.id;
  parseBody(req, (err, body) => {
    if (err) return sendJson(res, 400, { error: "JSON inválido" });

    const productos = readProductos();
    const producto = productos.find((p) => p.id === id);
    if (!producto)
      return sendJson(res, 404, { error: "Producto no encontrado" });

    const { nombre, precio } = body;
    if (nombre !== undefined) producto.nombre = nombre;
    if (precio !== undefined && typeof precio === "number")
      producto.precio = precio;

    saveProductos(productos);
    sendJson(res, 200, { data: producto });
  });
}

function remove(req, res) {
  const id = req.params.id;
  const productos = readProductos();
  const index = productos.findIndex((p) => p.id === id);
  if (index === -1)
    return sendJson(res, 404, { error: "Producto no encontrado" });

  const eliminado = productos.splice(index, 1)[0];
  saveProductos(productos);
  sendJson(res, 200, { data: eliminado });
}

module.exports = {
  getAll,
  getOne,
  create,
  updateFull,
  updatePartial,
  remove,
};
