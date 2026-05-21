## Context

Actualmente la aplicación no cuenta con un sistema robusto de feedback al usuario más allá de mensajes de error en línea o cambios bruscos en la UI. Para mejorar la Developer Experience y User Experience, se requiere un sistema global de Toasts.

## Goals / Non-Goals

**Goals:**
- Proveer un método global (`useToast`) para despachar notificaciones.
- Mostrar notificaciones flotantes animadas que desaparezcan automáticamente (auto-dismiss).
- Soportar diferentes tipos de notificaciones (éxito, error, información).

**Non-Goals:**
- No se instalarán librerías de terceros (como `react-toastify` o `sonner`); el sistema será 100% custom y construido sobre la arquitectura actual de React Context para mantener el control y reducir dependencias.

## Decisions

- **Gestión de Estado**: Se usará la Context API de React (`ToastContext`) combinada con un estado interno (`useState` o `useReducer` en el Provider) que mantendrá un arreglo de toasts activos.
- **Temporizadores**: Cada toast tendrá un temporizador en su ciclo de vida (`useEffect`) para disparar un evento de remoción luego de X milisegundos (ej: 3000ms).
- **Inyección en el DOM**: El contenedor de toasts se renderizará dentro del `ToastProvider`, garantizando que quede flotante por encima de toda la app mediante CSS (`position: fixed`, `z-index` alto).

## Risks / Trade-offs

- **Memory Leaks por temporizadores**: Si un toast se remueve antes de que su temporizador se dispare (por ejemplo, porque el usuario lo cerró manualmente), el temporizador podría intentar actualizar el estado de un componente desmontado.
  *Mitigación*: Retornar `clearTimeout` en el `useEffect` del componente individual del Toast.
