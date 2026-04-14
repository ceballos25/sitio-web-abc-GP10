📚 ABC Aprende Con Nosotros

Aplicación web interactiva para aprender el abecedario mediante tarjetas tipo "flip card".
Permite visualizar letras, imágenes asociadas, contar interacciones y filtrar vocales o consonantes.

Demo: https://ceballos25.github.io/sitio-web-abc-GP10/

🚀 Funcionalidades
Visualización del abecedario completo (A-Z)
Animación tipo flip (frente / reverso)
Contador dinámico de clics

Filtros:
Mostrar todas las letras
Mostrar solo vocales
Diseño responsive con Bootstrap
Tecnologías utilizadas
HTML5
CSS3
JavaScript (Vanilla)
Bootstrap 5
📂 Estructura del proyecto
📁 proyecto/
 ├── index.html
 ├── app.js
 ├── estilos.css
 └── img/
     ├── a.jpg
     ├── b.avif
     ├── c.webp
     └── ...
⚙️ Instalación y uso
Clona el repositorio:
git clone https://github.com/ceballos25/sitio-web-abc-GP10.git
Abre el proyecto:
cd sitio-web-abc-GP10
Ejecuta:
Abre el archivo index.html en tu navegador
Lógica principal
Contador de clics

Cada vez que el usuario interactúa con una tarjeta:

contador++;
contadorDom.innerText = contador;
Filtro de vocales

Se muestran solo los elementos con la clase .vocal:

card.forEach(el => {
  if (el.classList.contains("vocal")) {
    el.classList.remove("d-none");
  } else {
    el.classList.add("d-none");
  }
});

Descripción visual
Tarjetas tipo grid con letras
Cada tarjeta tiene:
Frente: letra
Reverso: imagen + texto
Botones superiores para filtrado
Contador visible en tiempo real

Mejoras futuras
Control de selección (sumar/restar correctamente)
Persistencia con localStorage
Animaciones más suaves
Mejoras de accesibilidad
Pronunnciación de las vocales/consonantes

--------------------------------------
Autores
Juan Castro
Alexandra Díaz
Luis Salgado
Cristian Ceballos

Licencia
Proyecto de uso educativo.
