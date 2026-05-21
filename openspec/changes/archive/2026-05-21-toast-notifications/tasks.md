## 1. Infraestructura de Toasts (Context)

- [x] 1.1 Crear directorio y archivo `src/context/ToastContext.tsx` con su respectivo Provider y custom hook `useToast`.
- [x] 1.2 Implementar en el Context la lógica para agregar (`addToast`) y remover (`removeToast`) notificaciones del estado.

## 2. Componentes de Interfaz (UI)

- [x] 2.1 Crear el componente `src/components/Toast.tsx` para renderizar el mensaje individual, su ícono según el tipo (success, error) y manejar su propio `useEffect` de auto-cierre con `setTimeout`.
- [x] 2.2 Crear el componente `src/components/ToastContainer.tsx` que reciba el array de toasts activos y los renderice de forma absoluta/fija sobre la pantalla.

## 3. Integración en la App

- [x] 3.1 Envolver la aplicación (`src/App.tsx` o `main.tsx`) con el `<ToastProvider>`.
- [x] 3.2 Modificar `RegistrationForm.tsx` para importar `useToast` y reemplazar cualquier feedback actual de éxito por una llamada a `addToast('Participante guardado con éxito', 'success')`.
