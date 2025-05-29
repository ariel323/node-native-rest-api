# 📦 API REST de Productos en Node.js (Sin Express)

Este proyecto implementa una **API RESTful** utilizando **Node.js puro**, sin frameworks externos como Express. Permite realizar operaciones CRUD (crear, leer, actualizar y eliminar) sobre una lista de productos, que se mantiene **en memoria (hardcoded)** o en archivo según la versión.

---

## 🗂️ Estructura del Proyecto

cosimir-una-api/
├── servidor.js # Punto de entrada del servidor
├── controllers/
│ └── productosController.js # Lógica de negocio (CRUD)
├── routes/
│ └── productosRoutes.js # Definición de rutas y manejo de métodos HTTP
├── utils/
│ └── response.js # Función utilitaria para responder en formato JSON
└── data/
└── productos.json # (opcional) Archivo de datos si no se usa hardcoding



> 📌 Si estás usando la versión con hardcoding, podés eliminar la carpeta `data/`.

---

## 🚀 Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
2. Verificar que Node.js esté instalado

node -v
Se recomienda usar Node.js v18 o superior

3. Ejecutar el servidor

node servidor.js
✅ El servidor estará disponible en: http://localhost:3000

📌 Endpoints disponibles
Método	Ruta	Descripción
GET	/productos	Obtener todos los productos
GET	/productos/:id	Obtener un producto por su ID
POST	/productos	Crear un nuevo producto
PUT	/productos/:id	Reemplazar completamente un producto
PATCH	/productos/:id	Actualizar parcialmente un producto
DELETE	/productos/:id	Eliminar un producto por su ID

📥 Ejemplo de cuerpo JSON para POST y PUT
{
  "nombre": "Ejemplo",
  "precio": 100
}
🧱 Tecnologías utilizadas
Node.js (sin Express)

Módulo http (nativo)

Módulo fs (si se usa con archivos)

JavaScript moderno (ES6+)

Estructura modular (rutas, controladores, utilidades)

📄 Licencia
Este proyecto está licenciado bajo la MIT License.
Podés usarlo, modificarlo y distribuirlo libremente.

✍️ Autor
Desarrollado por Ariel Cosimir
📧 Contacto: arielalmada861@gmail.com
