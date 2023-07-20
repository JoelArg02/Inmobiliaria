$(document).ready(function () {
  const labels = document.querySelectorAll('.switch label');
  labels.forEach(label => {
    label.addEventListener('click', () => {
      labels.forEach(l => l.style.color = '#456173');
      label.style.color = 'white';
    });
  });

  $("#contactos").click(function () {
    // Crear el elemento del pop-up
    var popUp = $("<div></div>");
    popUp.attr("id", "popup");
    popUp.css({
      "position": "fixed",
      "top": "50%",
      "left": "50%",
      "transform": "translate(-50%, -50%)",
      "background": "#e6e6e6",
      "border-radius": "8px",
      "box-shadow": "0 0 40px -10px #000",
      "padding": "20px 30px 20px 30px",
      "width": "340px",
      "height": "540px",
      "max-width": "calc(100vw - 40px)",
      "box-sizing": "border-box",
      "font-family": "'Montserrat', sans-serif",
      "z-index": "9999"
    });

    // Contenido del formulario en el pop-up
    var formContent = `
    <h2>CONTACTANOS</h2>
    <p type="nombre:"><input placeholder="Escribe tu nombre aqui..."></input></p>
    <p type="Email:"><input placeholder="example@gmail.com"></input></p>
    <p type="Mensaje:"><input placeholder="Escribe la descripcion de tu duda..."></input></p>
    <button>Enviar mensaje</button>
    <div>
      <span class="fa fa-phone"></span>+593 997884812
      <span class="fa fa-envelope-o"></span>cjgranda1@espe.edu.ec
    </div>
  `;

    popUp.html(formContent);

    // Agregar el pop-up al body del documento
    $("body").append(popUp);

    // Agregar el fondo semitransparente
    var overlay = $("<div></div>");
    overlay.attr("id", "overlay");
    overlay.css({
      "position": "fixed",
      "top": 0,
      "left": 0,
      "width": "100%",
      "height": "100%",
      "background-color": "rgba(0, 0, 0, 0.5)",
      "z-index": "9998"
    });
    $("body").append(overlay);
  });

  // Función para mostrar/ocultar el pop-up y el fondo semitransparente
  function togglePopup() {
    var popUp = $("#popup");
    var overlay = $("#overlay");
    popUp.toggle();
    overlay.toggle();
  }

  // Cerrar el pop-up cuando se hace clic en el botón "Enviar mensaje"
  $(document).on("click", "button", function () {
    togglePopup();
  });

  // Cerrar el pop-up cuando se hace clic fuera del contenido del pop-up
  $(document).on("click", function (event) {
    if (!$(event.target).closest("#popup").length && !$(event.target).is("#contactos")) {
      var popUp = $("#popup");
      var overlay = $("#overlay");
      if (popUp.is(":visible")) {
        togglePopup();
      }
    }
  });
});