## Context

El proyecto actual cuenta con un Frontend en React (Vite) y un Backend en Node.js (Express) con SQLite. Para el TP9, se requiere la integración de Mercado Pago Checkout Pro. Esto implica crear preferencias de pago en el servidor utilizando las credenciales (Access Token) y exponer un endpoint que el cliente pueda consumir para iniciar el flujo de pago. 

## Goals / Non-Goals

**Goals:**
- Mostrar un listado de 6 cursos con su información y precio.
- Permitir la compra individual de un curso redirigiendo al Checkout Pro de Mercado Pago.
- Exponer un endpoint en el backend `/create_preference` que reciba los datos del curso y devuelva el ID o URL de la preferencia.
- Manejar URLs de retorno (Success, Failure, Pending) simuladas con Ngrok.

**Non-Goals:**
- Implementar un carrito de compras complejo (la compra será de 1 curso por vez).
- Integración de Webhooks para actualización asíncrona del estado en la base de datos (se priorizan las URLs de retorno según especificaciones del TP).

## Decisions

1. **Flujo de Checkout**: 
   - El cliente seleccionará "QUIERO ESTE CURSO".
   - Se hará un POST a `/create_preference` en el Backend con título y precio.
   - El Backend utiliza el SDK oficial `mercadopago` para Node.js y crea la preferencia.
   - El Backend devuelve el `init_point` y el frontend redirige al usuario (`window.location.href`), o devuelve el `id` para usar con el SDK de React. Para minimizar dependencias, redirigir al `init_point` devuelto es la opción más directa y robusta, o usar `@mercadopago/sdk-react` si se requiere el botón Wallet integrado. Optaremos por devolver `init_point` y redirigir, siendo la integración más estándar del Checkout Pro Clásico.

2. **Endpoints y Ngrok**:
   - Las `back_urls` apuntarán a una ruta local, y se levantará un túnel Ngrok para apuntar al frontend (`http://localhost:5173/` o una página de éxito) durante las pruebas.

## Risks / Trade-offs

- **[Riesgo]** Las URLs de Ngrok cambian cada vez que se levanta (versión gratuita).
  **Mitigación**: Configurar las `back_urls` dinámicamente o solicitar al usuario que actualice el `.env` o la configuración al momento de probar.
- **[Riesgo]** Credenciales expuestas.
  **Mitigación**: Recomendar el uso de variables de entorno `.env` en el backend para el `ACCESS_TOKEN` de Mercado Pago, aunque sea un TP.
