## 1. Custom Hooks (Base)

- [x] 1.1 Crear directorio `src/hooks` (si no existe) e implementar `useShortcut.jsx` para gestionar atajos de teclado globales.
- [x] 1.2 Implementar `useDebounce.jsx` en `src/hooks` para retrasar la ejecución de búsquedas continuas.

## 2. Modificaciones en Formularios (useId y Foco Inicial)

- [x] 2.1 Identificar los componentes del formulario de Participantes (ej. `ParticipanteForm` o similar) e importar `useId` y `useRef`.
- [x] 2.2 Aplicar `useId` para vincular atributos `id` de los inputs (text, checkbox, radio) con sus respectivos `htmlFor` de los labels, garantizando accesibilidad plena.
- [x] 2.3 Atar una referencia `useRef` al input "Nombre" y asignarle foco inicial (`.focus()`) mediante un `useEffect` con arreglo de dependencias vacío.

## 3. Mejoras UX en Listado (Filtros y Atajos)

- [x] 3.1 Identificar el componente que contiene el Listado y el filtro de participantes (ej. `ParticipanteList` o `Buscador`).
- [x] 3.2 Asignar una referencia `useRef` al input de búsqueda de participantes.
- [x] 3.3 Utilizar el hook `useShortcut` en el Listado configurando la combinación `Ctrl+B` para ejecutar `.focus()` sobre el buscador.
- [x] 3.4 Utilizar el hook `useDebounce` en el estado o callback de la búsqueda para optimizar el filtrado evitando sobrecargas de eventos en cada pulsación.
