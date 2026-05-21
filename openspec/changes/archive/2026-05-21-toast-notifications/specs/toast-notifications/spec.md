## ADDED Requirements

### Requirement: Feedback visual mediante notificaciones flotantes (Toasts)
El sistema MUST proporcionar feedback al usuario mostrando notificaciones tipo "Toast" en una esquina de la pantalla cuando se completan acciones importantes (éxito, error o avisos informativos).

#### Scenario: Visualización de un mensaje de éxito
- **WHEN** un participante se registra o actualiza correctamente
- **THEN** aparece un Toast flotante color verde (o estilo success) indicando que la operación fue exitosa
- **AND** la notificación desaparece automáticamente luego de 3 segundos sin requerir intervención del usuario

#### Scenario: Visualización de un mensaje de error
- **WHEN** ocurre un error al procesar una petición al backend
- **THEN** aparece un Toast flotante color rojo (o estilo error) indicando el problema detallado
- **AND** el usuario puede cerrar el Toast manualmente si lo desea
