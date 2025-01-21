$(document).ready(() => {
  let post = 1;

  $("#divform").hide();

  $("#crearpost").on("click", () => $("#divform").show());

  $("#formulario").on("submit", (e) => {
    e.preventDefault();

    const intitulo = $("#intitulo").val()
    const indescripcion = $("#indescripcion").val()
    const infecha = $("#infecha").val()

    if (intitulo === "" || indescripcion === "" || infecha === "") {
      alert("Ingresa una publicación válida");
    } else {
      $("#divform").hide();
      let div = $("<div></div>", { id: "post" + post });
      div.attr("class", "post");
      let titulo = $("<h2></h2>").text(intitulo);
      let descripcion = $("<p></p>").text(indescripcion);
      let fecha = $("<span></span>").text(infecha);
      let Eliminar = $("<button></button>", { id: "eliminar" }).text(
        "Eliminar"
      );
      let Comentar = $("<button></button>", { id: "comentar" }).text(
        "Comentar"
      );
      let divComentarios = $("<div></div>", { id: "comentarios" });

      Eliminar.on("click", () => {
        div.fadeOut(500, function () {
          div.remove(); 
        });
      });

      $(div).append(titulo);
      $(div).append(descripcion);
      $(div).append(fecha);
      $(div).append(Eliminar);
      $(div).append(Comentar);
      $(div).append(divComentarios);
      $("#mostrar").append(div);
      div.hide().fadeIn(1000);
      post = post + 1;
    }
    $("#intitulo").val("");
    $("#indescripcion").val("");
  });
});
