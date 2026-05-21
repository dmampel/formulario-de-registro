## Why

Implementación de las funcionalidades requeridas por el Trabajo Práctico N° 8 para la aplicación de Participantes. El objetivo principal es mejorar significativamente la experiencia de usuario (UX) mediante foco automático y atajos de teclado, garantizar la accesibilidad de los formularios generando IDs únicos, y aplicar buenas prácticas de reutilización de lógica mediante la creación de Custom Hooks, todo esto manteniendo intacta la arquitectura actual del sistema.

## What Changes

- **Foco automático inicial**: Al ingresar a la pantalla, el campo "Nombre" del formulario recibirá el foco de forma automática empleando `useRef`.
- **Atajos de teclado (UX)**: En el listado de participantes, se automatizará el traslado del foco hacia la sección de filtros de búsqueda al presionar una combinación de teclas (`Ctrl + B`), utilizando `useRef`.
- **Accesibilidad mejorada**: Se implementarán identificadores únicos generados en tiempo de ejecución con `useId` para vincular correctamente todos los componentes del formulario (`inputs`, `labels`, `checkbox` y `radio buttons`).
- **Custom Hooks**: Se crearán 2 funciones reutilizables (hooks personalizados) para dotar al sistema de utilidades prácticas. Propongo crear:
  - `useShortcut`: para encapsular y reutilizar la lógica de atajos de teclado (necesario para el `Ctrl + B`).
  - `useDebounce`: para optimizar el filtro de búsqueda de participantes (evitando que dispare búsquedas por cada tecla presionada), o en su defecto un hook de formulario.

## Capabilities

### New Capabilities
- `ux-hooks`: Funcionalidades que mejoran la experiencia de usuario y accesibilidad (foco automático, atajos de teclado y vinculación accesible de inputs con labels).

### Modified Capabilities

## Impact

- Modificación de componentes de formulario (UI) para integrar `useId`.
- Modificación del componente de Listado/Filtros para capturar el atajo de teclado y gestionar el foco.
- Creación de un nuevo directorio/archivos para Custom Hooks (`src/hooks/...`).
