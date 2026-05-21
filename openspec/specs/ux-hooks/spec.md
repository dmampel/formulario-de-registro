## ADDED Requirements

### Requirement: Foco automático en carga de formulario
El sistema MUST asignar el foco de entrada automáticamente al campo "Nombre" cuando la vista del formulario de registro de participante se renderiza por primera vez (al ingresar a la pantalla).

#### Scenario: Foco al ingresar a pantalla
- **WHEN** el usuario ingresa o carga la pantalla de formulario de registro
- **THEN** el input correspondiente al campo "Nombre" recibe foco activo
- **AND** el usuario puede escribir inmediatamente sin necesidad de hacer clic

### Requirement: Atajo de teclado para buscador
El sistema MUST trasladar el foco automáticamente al input del filtro de búsqueda cuando el usuario presiona la combinación de teclas configurada (Ctrl + B) en la pantalla de listado de participantes.

#### Scenario: Presionar Ctrl + B en el listado
- **WHEN** el usuario presiona la combinación Ctrl + B en la pantalla de listado
- **THEN** el input del filtro de búsqueda recibe el foco activo

### Requirement: IDs únicos accesibles en formularios
El sistema MUST asegurar que todos los campos interactivos de los formularios (`input`, `checkbox`, `radio`, `select`) tengan IDs únicos y estén correctamente enlazados a sus correspondientes `label` mediante el atributo `htmlFor`, generados dinámicamente.

#### Scenario: Generación dinámica de pares label-input
- **WHEN** se renderiza un formulario con controles interactivos
- **THEN** cada etiqueta `<label>` tiene un atributo `htmlFor` que coincide exactamente con el atributo `id` de su control asociado
- **AND** ningún ID entra en colisión con otro componente en el DOM

### Requirement: Optimización de búsqueda
El sistema MUST emplear una estrategia de "debounce" o retraso intencional en la ejecución de la búsqueda de participantes para no sobrecargar el sistema o el estado con búsquedas por cada tecla tipeada (usando custom hook).

#### Scenario: Tipeo continuo en el buscador
- **WHEN** el usuario escribe rápidamente un término en el filtro de búsqueda
- **THEN** la ejecución del filtro o la mutación del estado sólo ocurre luego de que el usuario deja de tipear por un lapso definido (ej. 300ms a 500ms)
