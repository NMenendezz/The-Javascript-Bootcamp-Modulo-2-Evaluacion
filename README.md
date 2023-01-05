# The-Javascript-Bootcamp-Modulo-2-Evaluacion
En este segundo proyecto hemos hecho una pequeña página web que muestra un listado de películas a partir de datos ya proporcionados.

Desde la página web podemos hacer lo siguiente:
- Añadir una película.
- Buscar una película.
- Ir a la ficha completa de una película.

Además, si añadimos alguna película nueva, al actualizar la página se mantienen.

### Añadir una película
Cuando pulsamos el botón de `Añadir película` se muestra un desplegable para rellenar los siguientes datos de texto:
- Título de la película.
- Link a la ficha completa de la película (en este caso [rottentomatoes.com](https://www.rottentomatoes.com).
- Link para la imagen de la película.
- Año de estreno.
- Protagonizada por.
- Dirigida por.
  
El formulario nos obliga a introducir, al menos, el título de la película, si no, el botón de `Aceptar`aparecerá inhabilitado.
Al lado de dicho botón nos encontramos con otro que dice `Limpiar`, que nos sirve para vaciar todos los campos.

### Buscar una película
Tenemos un campo de texto donde podremos introducir el nombre completo o parte del nombre de la película que queramos buscar.
Después pulsaremos el botón ubicado a la derecha que dice `Buscar`.

### Ir a la ficha completa de una película
Para ir a la ficha completa de una de las películas, basta con hacer click sobre cualquier parte de la ficha de la película que queramos ver.
Esto nos abrirá una nueva ventana con los datos completos de la película en el portal de [rottentomatoes.com](https://www.rottentomatoes.com).

## Errores conocidos
- En el formulario de añadir una película:
  * Si introducimos un espacio en blanco en el título de la película, habilitará el botón de aceptar, permitiendo su envío y añadiéndo una película sin título a la lista.
  * No existe validación de los datos, como en los campos de año, url o link.
- Al buscar una película, muestra el título en letras minúsculas.

## Things To Do
- Incluir un botón para marcar una película como favorita y que se muestre con un color diferente.
