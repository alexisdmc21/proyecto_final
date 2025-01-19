$(document).ready(() => {
  //Array de los post, con sus respectivos comentarios
  let arraypost = [];
  
  //Filtrar por palabra clave
  $("#filtrar_boton").on("click", () => {
    let palabraclave = $("#filtrar_elementos").val();

    post = $(".post");
    arraypost = post.toArray();

    const filtrar_elementos = $("#filtrar_elementos").val()

    if (filtrar_elementos === "") {
      alert("Campo vacio")
    } else {
       $("#mostrar_filtrados").empty();
      $("#mostrar").hide();
      $("#mostrar_filtrados").show();
      $("#t_filtro").text(
        `Post que coinciden con la palabra clave: ${palabraclave}`
      );

      arraypost.forEach((element, index) => {
        let h2 = $(element).find("h2").text();
        let encontrado = h2.includes(palabraclave);
        if (encontrado) {
          $("#mostrar_filtrados").append(element);
        }
      });
    }
    $("#filtrar_elementos").val("");
  });
});
