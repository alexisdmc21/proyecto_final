$(document).ready(() => {
    let post = 1;
  
    $("#divform").hide();
  
    $("#crearpost").on("click", () => $("#divform").show());
  
    $("#formulario").on("submit", (e) => {
      e.preventDefault();
      $("#divform").hide();
  
      if ($("#intitulo").val() === "" || $("#indescripcion").val() === "") {
        alert("Ingresa una publicación válida");
      } else {
        let div = $("<div></div>", { id: "post" + post });
        div.attr("class", "post");
        let titulo = $("<h2></h2>").text($("#intitulo").val());
        let descripcion = $("<p></p>").text($("#indescripcion").val());
        let fecha = $("<span></span>").text($("#infecha").val());
        let Eliminar = $("<button></button>", { id: "eliminar" }).text(
          "Eliminar"
        );
        let Comentar = $("<button></button>", { id: "comentar" }).text(
          "Comentar"
        );
        let divComentarios = $("<div></div>", { id: "comentarios" });
  
        Eliminar.on("click", () => div.remove());
  
        $(div).append(titulo);
        $(div).append(descripcion);
        $(div).append(fecha);
        $(div).append(Eliminar);
        $(div).append(Comentar);
        $(div).append(divComentarios);
        $("#mostrar").append(div);
        post = post + 1;
      }
    });
  });
  