# este es un mensaje de prueba 
## Arrancar el proyecto
npm run dev
## instalacion de algo
npm i -D ...
## instalacion tailwind jit
npm i -D @tailwindcsss/jit
anadir configuracion postcss.config.js
## git ignore
Realizar un .gitignore con node_modules y el dist
## package.json 
 "build": "del dist && ELEVENTY_ENV=production npx run-s build:postcss build:webpack build:eleventy",
    "build:postcss": "npx postcss src/css/style.css -o dist/style.css --env production",
    "build:eleventy": "npx @11ty/eleventy",
    "build:webpack": "webpack --config webpack.config.js",
    "dev": "del dist && ELEVENTY_ENV=development npx run-p dev:webpack dev:postcss dev:eleventy",
    "dev:postcss": "npx postcss src/css/style.css -o dist/style.css --env development -w --verbose",
    "dev:eleventy": "npx @11ty/eleventy --serve",
    "dev:webpack": " webpack --watch --config webpack.config.js"