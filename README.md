# API REST de Productos (Node.js sin Express - Hardcoded)

Este proyecto implementa una API REST básica en **Node.js puro** sin utilizar frameworks como Express. Los productos están **hardcodeados en memoria**, por lo que se pierden cuando el servidor se reinicia.



## 🧱 Estructura del Proyecto

cosimir-una-api/
├── servidor.js # Punto de entrada del servidor
├── controllers/
│ └── productosController.js # Lógica de los endpoints
├── routes/
│ └── productosRoutes.js # Ruteo HTTP
└── utils/
└── response.js # Función utilitaria para enviar respuestas JSON



## 🚀 Cómo ejecutar

1. Cloná este repositorio o descargalo:

```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
Ejecutá el servidor:
node servidor.js
El servidor estará corriendo en:
http://localhost:3000
📌 Endpoints disponibles
🔍 Obtener todos los productos
http
GET /productos
🔍 Obtener un producto por ID
http
GET /productos/:id
➕ Crear un producto
POST /productos
Body JSON:

json
{
  "nombre": "Ejemplo",
  "precio": 99.99
}
🔄 Reemplazar un producto
http
PUT /productos/:id
Body completo obligatorio.

🛠️ Actualizar parcialmente un producto
http
PATCH /productos/:id
Body con campos opcionales.

❌ Eliminar un producto
DELETE /productos/:id
⚙️ Tecnologías utilizadas
Node.js (puro)

Módulo HTTP nativo

JavaScript moderno

Datos hardcodeados (sin base de datos ni archivos)

📄 Licencia
MIT - Libre para usar, modificar y compartir.

✍️ Autor
Desarrollado por Ariel Cosimir
📧 Contacto: arielalmada861@gmail.com
