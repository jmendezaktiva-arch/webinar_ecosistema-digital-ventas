Presentación: Webinar - Ecosistema Digital Rentable
Este repositorio contiene el código fuente de la presentación web interactiva para el webinar "Ecosistema Digital Rentable". El proyecto está construido con Reveal.js y está diseñado para ser fácilmente actualizable y desplegable.

✨ Estructura del Proyecto
El proyecto está organizado de forma modular para separar el contenido de la estructura y la lógica, facilitando su mantenimiento.

/
|-- index.html          # Esqueleto principal de la presentación.
|-- content.js          # ¡IMPORTANTE! Aquí vive todo el texto de las diapositivas.
|-- /assets/
|   |-- /css/
|   |   |-- custom.css  # Estilos visuales personalizados.
|   |-- /js/
|   |   |-- main.js     # Lógica que construye las diapositivas dinámicamente.
|   |-- /images/
|       |-- (Aquí debes colocar las imágenes de tu presentación)
|-- README.md           # Este archivo.

🚀 Cómo Actualizar el Contenido
La principal ventaja de esta estructura es que no necesitas tocar el código HTML para cambiar los textos o las imágenes.

Para modificar cualquier diapositiva, sigue estos pasos:

Abre el archivo content.js.

Busca la diapositiva que deseas editar dentro del array slideContent. Cada objeto {...} en el array corresponde a una diapositiva.

Modifica los valores de las propiedades title, content o image según necesites.

Para las imágenes: Sube tus imágenes a la carpeta /assets/images/ y asegúrate de que la ruta en la propiedad image sea correcta (ej: image: 'assets/images/mi-imagen.png').

Guarda el archivo.

Sube los cambios a tu repositorio de GitHub (git push). Netlify detectará el cambio y actualizará la presentación automáticamente.

🛠️ Despliegue
Este sitio está configurado para un despliegue continuo y automático a través de Netlify.

Repositorio: Conectado a este repositorio de GitHub.

Publicación: Cualquier cambio subido a la rama main disparará un nuevo despliegue en Netlify, actualizando el sitio en segundos.

Configuración: No se requiere ninguna configuración de build. Netlify sirve los archivos estáticos directamente.