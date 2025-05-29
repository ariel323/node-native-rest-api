API REST de Productos en Node.js (sin Express)
Este proyecto es una API REST simple construida en Node.js puro (sin frameworks como Express). Permite realizar operaciones CRUD sobre un archivo productos.json.

🗂️ Estructura del Proyecto
cosimir-una-api/ ├── servidor.js # Punto de entrada del servidor ├── data/ │ └── productos.json # Archivo con los datos de productos ├── controllers/ │ └── productosController.js # Lógica de negocio (CRUD) ├── routes/ │ └── productosRoutes.js # Manejo de rutas y métodos HTTP └── utils/ └── response.js # Función para responder en JSON

🚀 Cómo ejecutar
1. Cloná el repositorio
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
2. Asegurate de tener Node.js instalado
bash
node -v
Recomendado: Node.js 18+ o superior

3. Ejecutá el servidor
bash
node servidor.js
El servidor estará corriendo en http://localhost:3000

📌 Endpoints disponibles
GET /productos
Devuelve todos los productos.

GET /productos/:id
Devuelve un producto por su ID.

POST /productos
Crea un nuevo producto.
Body JSON:

json

{
  "nombre": "Ejemplo",
  "precio": 100
}
PUT /productos/:id
Reemplaza completamente un producto.
Body JSON obligatorio.

PATCH /productos/:id
Actualiza parcialmente un producto.
Body JSON con campos opcionales.

DELETE /productos/:id
Elimina un producto por su ID.

🧱 Tecnologías usadas
Node.js (puro, sin frameworks)

Sistema de archivos (fs)

Módulo http

JSON como "base de datos"

📄 Licencia
Este proyecto está bajo la licencia MIT. Podés usarlo, modificarlo y distribuirlo libremente.

✍️ Autor
Desarrollado por Ariel Cosimir
📧 Contacto: [arielalmada861@gmail.com]
