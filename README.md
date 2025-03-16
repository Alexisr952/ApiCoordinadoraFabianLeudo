Coordinadora API Tests 🚀

Repositorio para pruebas automatizadas de la API de Coordinadora usando Playwright y Serenity/JS.

📋 Requisitos Previos
Asegúrate de tener instalado:

Node.js (versión recomendada: LTS)
npm o yarn
Playwright (npm install -g playwright)
Serenity/JS (npm install --save-dev @serenity-js/core @serenity-js/assertions @serenity-js/rest @serenity-js/playwright)

🚀 Instalación
Clona este repositorio e instala las dependencias:

git clone https://github.com/tuusuario/coordinadora-api-tests.git
cd coordinadora-api-tests
npm install


📝 Estructura del Proyecto

📂 coordinadora-api-tests
├── 📂 src
│   ├── 📂 actors              # Actores en Serenity/JS
│   ├── 📂 tasks               # Tareas que los actores pueden realizar
│   ├── 📂 tests               # Pruebas automatizadas
│   │   ├── crearGuia.test.ts  # Prueba para creación de guía
│   │   ├── validarError.test.ts # Prueba para validaciones
│   ├── 📜 serenity.conf.ts    # Configuración de Serenity/JS
│   ├── 📜 playwright.config.ts # Configuración de Playwright
├── 📜 package.json            # Dependencias del proyecto
├── 📜 README.md               # Documentación del proyecto


▶ Ejecutar Pruebas
Para correr todas las pruebas:


npx playwright test
npx playwright test tests/crearGuia.test.ts
npx playwright test --headed
npx playwright show-report


🎯 Contacto
✉ Correo: f.alexis9525@gmail.com
📌 GitHub: Alexisr952



