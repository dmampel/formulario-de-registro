## Why

Mejorar la experiencia de usuario (UX) proporcionando un sistema de feedback visual claro y no intrusivo tras realizar acciones importantes (como crear, editar o eliminar participantes, o al ocurrir errores). En vez de que la pantalla simplemente cambie o no ofrezca respuestas claras, las notificaciones tipo "Toast" ayudarán al usuario a saber inmediatamente el resultado de sus acciones.

## What Changes

- Creación de un contexto global (`ToastContext`) para emitir notificaciones desde cualquier lugar de la aplicación.
- Componente de visualización de Toasts que se renderiza flotando en una esquina de la pantalla.
- Integración de los Toasts en el formulario de registro (para avisar éxito/error) y posiblemente en el login o listado.

## Capabilities

### New Capabilities
- `toast-notifications`: Sistema de notificaciones flotantes (toasts) para feedback asíncrono y sincrónico al usuario, gestionado globalmente.

### Modified Capabilities

## Impact

- `App.tsx` o `main.tsx` para envolver la app con el `ToastProvider`.
- Componentes que realizan mutaciones de estado o llamadas a la API (ej: `RegistrationForm.tsx`) para disparar las notificaciones en lugar de depender de feedback crudo.
- Nuevos componentes de UI en `src/components/` y un nuevo contexto en `src/context/`.
