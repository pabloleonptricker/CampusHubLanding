# 🎓 CampusHub Landing

<div align="center">

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

**Una landing page moderna, performante y escalable construida con la última tecnología de Angular.**

[Ver Demo](#) • [Reportar Bug](#) • [Solicitar Feature](#)

</div>

---

## 📋 Descripción

**CampusHub Landing** es el punto de entrada oficial para la plataforma CampusHub. Diseñada para ofrecer una experiencia de usuario de primera clase, aprovecha la potencia de **Angular 21** con **Server-Side Rendering (SSR)** para garantizar tiempos de carga ultrarrápidos y un SEO optimizado. El proyecto sigue una arquitectura modular y utiliza un sistema de diseño SCSS robusto.

## ✨ Características Principales

- **⚡ Angular 21 Core**: Construido sobre la versión más reciente del framework para máximo rendimiento.
- **🚀 Server-Side Rendering (SSR)**: Implementación nativa con Hydration para una carga inicial instantánea.
- **🎨 Sistema de Diseño SCSS**: Arquitectura de estilos modular, mantenible y escalable.
- **📱 Diseño Responsivo**: Adaptado perfectamente a móviles, tablets y escritorio.
- **🧪 Testing Moderno**: Configurado con **Vitest** para pruebas unitarias rápidas y eficientes.
- **🧩 Componentes Modulares**: Estructura clara con secciones dedicadas (Hero, Features, CTA).

## 🛠️ Stack Tecnológico

- **Framework**: [Angular](https://angular.io/) v21
- **Lenguaje**: TypeScript
- **Estilos**: SCSS (Sass)
- **SSR/Server**: Angular SSR / Express
- **Testing**: Vitest
- **Paquetería**: NPM

## 🚀 Comenzando

Sigue estas instrucciones para obtener una copia del proyecto y ejecutarlo en tu máquina local.

### Prerrequisitos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (Versión recomendada: LTS v20+ o v22+)
- [NPM](https://www.npmjs.com/) (Generalmente incluido con Node.js)

### 🔧 Instalación

1.  **Clona el repositorio**:

    ```bash
    git clone https://github.com/tu-usuario/campus-hub-landing.git
    cd campus-hub-landing
    ```

2.  **Instala las dependencias**:
    ```bash
    npm install
    ```

## 💻 Desarrollo

Para iniciar el servidor de desarrollo local:

```bash
npm start
```

O usando el comando de Angular CLI directamente:

```bash
ng serve
```

La aplicación estará disponible en `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias algún archivo fuente.

## 📦 Construcción (Build)

Para compilar el proyecto para producción:

```bash
npm run build
```

Los artefactos de construcción se almacenarán en el directorio `dist/`.

### SSR (Server-Side Rendering)

Para ejecutar la versión de producción con SSR localmente:

```bash
npm run serve:ssr:CampusHubLanding
```

## 📂 Estructura del Proyecto

```text
src/
├── app/
│   ├── components/       # Componentes reutilizables y secciones (Hero, CTA, etc.)
│   ├── app.routes.ts     # Definición de rutas
│   └── ...
├── styles/               # Sistema de diseño SCSS
│   ├── base/            # Reset, tipografía, variables globales
│   ├── components/      # Estilos específicos de componentes
│   ├── layout/          # Grid, espaciado, contenedores
│   ├── pages/           # Estilos específicos de páginas
│   └── main.scss        # Punto de entrada de estilos
├── assets/               # Imágenes, fuentes e iconos estáticos
└── index.html            # Archivo HTML raíz
```

## 🤝 Contribución

¡Las contribuciones son bienvenidas!

1.  Haz un Fork del proyecto.
2.  Crea tu rama de funcionalidad (`git checkout -b feature/AmazingFeature`).
3.  Commit a tus cambios (`git commit -m 'Add some AmazingFeature'`).
4.  Push a la rama (`git push origin feature/AmazingFeature`).
5.  Abre un Pull Request.

## 📄 Licencia

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.

---

<div align="center">
  Hecho con ❤️ por el equipo de CampusHub
</div>
