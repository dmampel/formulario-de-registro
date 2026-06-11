## Why

Se requiere implementar la integración de Checkout Pro de Mercado Pago (TP N° 9) para permitir que los usuarios compren cursos dentro de la aplicación de participantes. Esta funcionalidad es esencial para proveer una experiencia de e-commerce o pago seguro mediante un procesador externo.

## What Changes

- Creación de una nueva página de "Cursos" en el Frontend (React).
- Visualización de un catálogo con al menos 6 cursos con diferentes precios (ej. "Curso React $25000", "Curso DBA $40000").
- Inclusión del botón «QUIERO ESTE CURSO» en cada tarjeta, el cual se comunicará con el Backend para generar la preferencia de pago.
- Integración de Mercado Pago SDK en el Backend (Node/Express) para crear las preferencias de compra y proveer el identificador (`preference_id`).
- Integración de Mercado Pago SDK en el Frontend o redirección simple al punto de inicio (init_point) de MP.
- Uso de NGROK u otras URLs locales para el entorno de pruebas y retorno.

## Capabilities

### New Capabilities
- `mercadopago-checkout`: Integración de la plataforma de Mercado Pago Checkout Pro, permitiendo crear preferencias y procesar pagos desde el Frontend.

### Modified Capabilities
- Ninguna.

## Impact

- **Frontend**: Nuevo componente para visualizar cursos, nuevas rutas, posibles actualizaciones al navbar.
- **Backend**: Nueva ruta `/create_preference` en `index.js`.
- **Dependencias**:
  - `mercadopago` (Backend).
  - `@mercadopago/sdk-react` (Frontend, opcional según la forma de integración elegida).
