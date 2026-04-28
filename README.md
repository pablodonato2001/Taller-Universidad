# MiProyecto - Taller Universidad

Este es un proyecto de React Native creado con [Expo](https://expo.dev) y enrutamiento con [Expo Router](https://docs.expo.dev/router/introduction/).

## 📋 Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu computadora:

- [Node.js](https://nodejs.org/) (recomendado usar la versión LTS).
- [Git](https://git-scm.com/) (opcional, para control de versiones).
- **Expo Go** instalado en tu dispositivo móvil (disponible en [iOS](https://apps.apple.com/us/app/expo-go/id982107779) y [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=es_AR)), o tener configurado un emulador/simulador en tu computadora.

## 🚀 ¿Cómo abrir el proyecto?

1. Clona el repositorio en tu máquina local o descarga los archivos.
   ```bash
   git clone https://github.com/pablodonato2001/Taller-Universidad.git
   ```
2. Abre la carpeta del proyecto en tu editor de código favorito (por ejemplo, [Visual Studio Code](https://code.visualstudio.com/)).
   ```bash
   cd Taller-Universidad/MiProyecto
   code .
   ```

## 🛠️ ¿Cómo ejecutarlo y hacerlo funcionar?

Sigue estos pasos en la terminal (línea de comandos) dentro de la carpeta del proyecto (`MiProyecto`):

### 1. Instalar las dependencias
Antes de correr el proyecto por primera vez, debes instalar todas las librerías necesarias. Ejecuta:
```bash
npm install
```

### 2. Iniciar el servidor de desarrollo
Para arrancar el proyecto, ejecuta:
```bash
npm start
```
*(También puedes usar `npx expo start`)*

Al ejecutar este comando, aparecerá un código QR en la terminal. 

### 3. Visualizar la aplicación
Tienes varias opciones para ver la aplicación corriendo:

- **En tu celular (Dispositivo Físico):** Abre la aplicación **Expo Go**, escanea el código QR que apareció en la terminal (usando la cámara en iOS o escaneando directamente desde la app en Android) y la app comenzará a cargar.
- **En un Emulador de Android:** Presiona la tecla `a` en la terminal (requiere tener Android Studio configurado).
- **En un Simulador de iOS (solo en Mac):** Presiona la tecla `i` en la terminal (requiere tener Xcode instalado).
- **En el navegador web:** Presiona la tecla `w` en la terminal para abrirlo como una app web.

## 📁 Estructura básica
- `/app` - Contiene las pantallas y rutas de la aplicación manejadas por Expo Router.
- `/components` - Componentes reutilizables de la interfaz.
- `/assets` - Imágenes, fuentes y otros archivos estáticos.
