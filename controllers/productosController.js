const { sendJson } = require("../utils/response");

let productos = [
  {
    id: 1,
    name: "Silla Ergonómica 1",
    description: "Diseñado para brindar la mejor experiencia de uso.",
    precio: 165.08,
  },
  {
    id: 2,
    name: "Bolso de Mano 2",
    description: "Disponible en varios colores y tamaños.",
    precio: 162.11,
  },
  {
    id: 3,
    name: "Gorra Deportiva 3",
    description: "Producto de alta calidad con excelentes prestaciones.",
    precio: 88.95,
  },
  {
    id: 4,
    name: "Zapatos de Cuero 4",
    description: "Comodidad y estilo en cada paso.",
    precio: 120.5,
  },
  {
    id: 5,
    name: "Reloj Inteligente 5",
    description: "Tecnología avanzada al alcance de tu muñeca.",
    precio: 250,
  },
  {
    id: 6,
    name: "Auriculares Inalámbricos 6",
    description: "Sonido envolvente y conexión rápida.",
    precio: 75.99,
  },
  {
    id: 7,
    name: "Cámara Digital 7",
    description: "Captura tus momentos con calidad profesional.",
    precio: 499.99,
  },
  {
    id: 8,
    name: "Laptop Gaming 8",
    description: "Rendimiento excepcional para los gamers más exigentes.",
    precio: 1200,
  },
  {
    id: 9,
    name: "Smartphone Último Modelo 9",
    description: "Tecnología de vanguardia en la palma de tu mano.",
    precio: 899.99,
  },
  {
    id: 10,
    name: "Tableta con Stylus 10",
    description: "Ideal para creativos y profesionales.",
    precio: 349.99,
  },
  {
    id: 11,
    name: "Monitor Ultra HD 11",
    description: "Visualiza tus contenidos con la mejor calidad.",
    precio: 299.99,
  },
  {
    id: 12,
    name: "Teclado Mecánico RGB 12",
    description: "Precisión y estilo para tus sesiones de juego.",
    precio: 129.99,
  },
  {
    id: 13,
    name: "Impresora Multifuncional 13",
    description: "Imprime, escanea y copia con facilidad.",
    precio: 199.99,
  },
  {
    id: 14,
    name: "Disco Duro Externo 14",
    description: "Almacenamiento portátil y seguro para tus datos.",
    precio: 89.99,
  },
  {
    id: 15,
    name: "Proyector Portátil 15",
    description: "Lleva tus presentaciones a cualquier lugar.",
    precio: 399.99,
  },
  {
    id: 16,
    name: "Altavoces Bluetooth 16",
    description: "Sonido potente y conexión inalámbrica.",
    precio: 69.99,
  },
  {
    id: 17,
    name: "Router Wi-Fi de Doble Banda 17",
    description: "Conexión rápida y estable para todos tus dispositivos.",
    precio: 79.99,
  },
  {
    id: 18,
    name: "Cargador Solar Portátil 18",
    description: "Energía renovable para tus dispositivos móviles.",
    precio: 45,
  },
  {
    id: 19,
    name: "Kit de Herramientas Multifuncional 19",
    description: "Todo lo que necesitas para tus proyectos de bricolaje.",
    precio: 59.99,
  },
  {
    id: 20,
    name: "Bicicleta de Montaña 20",
    description: "Aventura y deporte al aire libre.",
    precio: 499.99,
  },
  {
    id: 21,
    name: "Equipo de Camping Completo 21",
    description: "Todo lo necesario para disfrutar de la naturaleza.",
    precio: 299.99,
  },
  {
    id: 22,
    name: "Juego de Maletas de Viaje 22",
    description: "Diseño elegante y funcional para tus viajes.",
    precio: 199.99,
  },
  {
    id: 23,
    name: "Set de Cocina Profesional 23",
    description: "Utensilios de alta calidad para chefs aficionados.",
    precio: 149.99,
  },
  {
    id: 24,
    name: "Barbacoa Portátil 24",
    description: "Disfruta de tus asados en cualquier lugar.",
    precio: 89.99,
  },
  {
    id: 25,
    name: "Kit de Jardinería Completo 25",
    description: "Todo lo necesario para cuidar tu jardín.",
    precio: 79.99,
  },
  {
    id: 26,
    name: "Silla de Playa Plegable 26",
    description: "Ligera y fácil de transportar para tus días de sol.",
    precio: 39.99,
  },
  {
    id: 27,
    name: "Sombrilla de Patio Grande 27",
    description: "Protección solar para tus espacios exteriores.",
    precio: 59.99,
  },
  {
    id: 28,
    name: "Hamaca de Tela Resistente 28",
    description: "Relájate al aire libre con estilo y comodidad.",
    precio: 49.99,
  },
  {
    id: 29,
    name: "Kit de Pesca Completo 29",
    description: "Todo lo necesario para una jornada de pesca exitosa.",
    precio: 89.99,
  },
  {
    id: 30,
    name: "Equipo de Fotografía Aficionado 30",
    description: "Comienza tu aventura en la fotografía con este kit.",
    precio: 199.99,
  },
  {
    id: 31,
    name: "Set de Maquillaje Profesional 31",
    description: "Todo lo que necesitas para un look perfecto.",
    precio: 79.99,
  },
  {
    id: 32,
    name: "Perfume de Marca Exclusiva 32",
    description: "Fragancia única para ocasiones especiales.",
    precio: 120,
  },
  {
    id: 33,
    name: "Reloj de Pulsera Clásico 33",
    description: "Elegancia y sofisticación en tu muñeca.",
    precio: 199.99,
  },
  {
    id: 34,
    name: "Gafas de Sol Polarizadas 34",
    description: "Protección y estilo bajo el sol.",
    precio: 89.99,
  },
  {
    id: 35,
    name: "Bolso de Viaje Grande 35",
    description: "Espacioso y resistente para tus aventuras.",
    precio: 159.99,
  },
  {
    id: 36,
    name: "Chaqueta Impermeable 36",
    description:
      "Protección contra el clima en cualquier actividad al aire libre.",
    precio: 99.99,
  },
  {
    id: 37,
    name: "Botella de Agua Reutilizable 37",
    description: "Mantente hidratado de forma ecológica.",
    precio: 19.99,
  },
  {
    id: 38,
    name: "Mochila Escolar con Compartimentos 38",
    description: "Organización y comodidad para estudiantes.",
    precio: 49.99,
  },
  {
    id: 39,
    name: "Juego de Sábanas de Algodón 39",
    description: "Suavidad y confort para un buen descanso.",
    precio: 59.99,
  },
  {
    id: 40,
    name: "Almohada Ergonómica 40",
    description: "Soporte ideal para un sueño reparador.",
    precio: 39.99,
  }
  
];

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
  sendJson(res, 200, { data: productos });
}

function getOne(req, res) {
  const id = req.params.id;
  const producto = productos.find((p) => p.id === id);
  if (!producto) return sendJson(res, 404, { error: "Producto no encontrado" });
  sendJson(res, 200, { data: producto });
}

function create(req, res) {
  parseBody(req, (err, body) => {
    if (err) return sendJson(res, 400, { error: "JSON inválido" });

    const { nombre, precio } = body;
    if (!nombre || typeof precio !== "number")
      return sendJson(res, 400, { error: "Datos inválidos" });

    const nuevo = {
      id: productos.length ? productos[productos.length - 1].id + 1 : 1,
      nombre,
      precio,
    };

    productos.push(nuevo);
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

    const index = productos.findIndex((p) => p.id === id);
    if (index === -1)
      return sendJson(res, 404, { error: "Producto no encontrado" });

    productos[index] = { id, nombre, precio };
    sendJson(res, 200, { data: productos[index] });
  });
}

function updatePartial(req, res) {
  const id = req.params.id;
  parseBody(req, (err, body) => {
    if (err) return sendJson(res, 400, { error: "JSON inválido" });

    const producto = productos.find((p) => p.id === id);
    if (!producto)
      return sendJson(res, 404, { error: "Producto no encontrado" });

    const { nombre, precio } = body;
    if (nombre !== undefined) producto.nombre = nombre;
    if (precio !== undefined && typeof precio === "number")
      producto.precio = precio;

    sendJson(res, 200, { data: producto });
  });
}

function remove(req, res) {
  const id = req.params.id;
  const index = productos.findIndex((p) => p.id === id);
  if (index === -1)
    return sendJson(res, 404, { error: "Producto no encontrado" });

  const eliminado = productos.splice(index, 1)[0];
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
