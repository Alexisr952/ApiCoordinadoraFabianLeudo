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
sh
Copiar
Editar
git clone https://github.com/tuusuario/coordinadora-api-tests.git
cd coordinadora-api-tests
npm install


📝 Estructura del Proyecto
bash
Copiar
Editar

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
sh
Copiar
Editar
npx playwright test
Para ejecutar una prueba específica:
sh
Copiar
Editar
npx playwright test tests/crearGuia.test.ts
Si quieres ver las pruebas en modo headful (con navegador visible):

sh
Copiar
Editar
npx playwright test --headed
Para generar un reporte de ejecución:

sh
Copiar
Editar
npx playwright show-report

🛠 Solución de Problemas
Error Cannot find module ...
Ejecuta:

sh
Copiar
Editar
npm install
Error tsc: command not found
Instala TypeScript:

sh
Copiar
Editar
npm install -g typescript
Error 500 en API
Verifica si la API está disponible y que el JSON enviado sea correcto.



