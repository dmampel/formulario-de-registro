## Context

Se requiere incorporar el uso de hooks nativos (`useRef`, `useId`) y Custom Hooks según los requerimientos del TP8. Actualmente, los componentes de formulario y listados carecen de vinculación de accesibilidad dinámica (IDs), y la UX relacionada a foco automático o atajos de teclado no está centralizada. El objetivo es implementar estas mejoras arquitectónicas en la capa de UI sin afectar el modelo de estado o la lógica de negocio subyacente.

## Goals / Non-Goals

**Goals:**
- Vincular dinámicamente labels e inputs usando IDs generados con `useId`, garantizando accesibilidad y unicidad en el DOM.
- Gestionar el foco de elementos (inputs de nombre, buscadores) de forma imperativa y segura usando `useRef`.
- Modularizar la lógica de UX en Custom Hooks genéricos (`useShortcut`, `useDebounce`) para que puedan ser reutilizados en toda la app.

**Non-Goals:**
- No se implementarán librerías externas de formularios (como React Hook Form). Todo será nativo con React.
- No se reescribirá la arquitectura del backend ni del estado global para soportar estas features de UI.

## Decisions

- **Implementación de useId**: 
  Los formularios actuales (ej. registro) generarán identificadores utilizando `useId()` en el nivel superior del componente y se pasarán como `id` a los `<input>` y como `htmlFor` a los `<label>`.
- **Implementación de useRef**:
  Se creará una referencia `nombreRef` que se atará al primer input del formulario. Un `useEffect` (onMount) llamará a `nombreRef.current.focus()` para dar foco inicial.
- **Custom Hook `useShortcut`**:
  Se desarrollará un hook `useShortcut(key, modifier, callback)` que escuchará eventos de teclado globales y ejecutará el callback. Esto permite que "Ctrl+B" mueva el foco al buscador desde cualquier parte de la vista de listado.
- **Custom Hook `useDebounce`**:
  Se creará un hook `useDebounce(value, delay)` para retrasar la búsqueda en el filtro de participantes, mejorando la performance y siendo un excelente caso de uso real de un custom hook.

## Risks / Trade-offs

- **Gestión de eventos globales (useShortcut)**: Añadir listeners a `document` o `window` puede generar "memory leaks".
  *Mitigación*: El custom hook se asegurará de limpiar el listener (removeEventListener) en la función de cleanup del `useEffect`.
- **Comportamiento por defecto del navegador**: `Ctrl + B` suele abrir los marcadores en algunos navegadores.
  *Mitigación*: En el custom hook, se usará `e.preventDefault()` cuando se detecte la combinación exacta para sobrescribir la acción nativa del navegador.
