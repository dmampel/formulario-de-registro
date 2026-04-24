# Sistema de Registro de Participantes 🚀

Este es un proyecto completo de gestión de participantes para eventos, desarrollado con un stack moderno y un diseño premium.

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** (con TypeScript)
- **Vite** (para el entorno de desarrollo)
- **Tailwind CSS** (estilizado moderno con efectos de glassmorphism)
- **Context API** (para la gestión del estado global)

### Backend
- **Node.js** & **Express**
- **SQLite3** (Base de datos persistente)
- **CORS** (para comunicación entre puertos)

## 🎨 Características Principales
- **Diseño Premium**: Interfaz oscura con estética de "vidrio", bordes brillantes y animaciones sutiles.
- **Categorización por Nivel**: Las tarjetas de los participantes cambian de color y brillo según su nivel de experiencia (Principiante, Intermedio, Avanzado).
- **CRUD Completo**: Registrar, listar, filtrar y eliminar participantes con persistencia en base de datos.
- **Formateo Automático**: Los nombres se guardan y muestran con el formato correcto (iniciales en mayúsculas).
- **Filtros Avanzados**: Búsqueda por nombre y filtrado por modalidad (Presencial, Virtual, Híbrido) o nivel.

## 🚀 Cómo Ejecutar el Proyecto

### 1. Clonar el repositorio
```bash
git clone https://github.com/dmampel/formulario-de-registro.git
cd formulario-de-registro
```

### 2. Ejecutar el Backend
```bash
cd backend
npm install
node index.js
```
El backend correrá en `http://localhost:3000`.

### 3. Ejecutar el Frontend
En una nueva terminal, desde la raíz del proyecto:
```bash
npm install
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`.

---
*Desarrollado para el TP5 de Programación 4 - UTN.*
*Arquitectura: Gestión de estado centralizada con useReducer + Context API y persistencia en SQLite.*
