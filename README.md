Trabajo en grupo

En la presente actividad se utiliza la librería de JS Jquery para crear una página web que se actualiza diariamente con información que le proporciona el usuario.

La pagina tienen una estructura intuitiva para que su usabilidad sea la mejor.

En el archivo de JS "post" se define la estructura de los post que se crearan de manera dinámica conforme lo decida el usuario.
Cada post tiene un titulo, descripción, fecha, un div para que se le vinculen comentarios al post y sus respectivos botones de comentar o eliminar.
El post tiene que llevar obligatoriamente titulo y descripción pero la fecha es opcional.

En el archivo de JS "comentarios" se establece la estructura de los comentarios que se asignaran a cada post de manera dinámica, los comentarios se pueden eliminar o actualizar conforme lo decida el usuario, se maneja la excepción típica de no se aceptan comentarios vacíos al igual que en los post.

En el archivo de JS "main" se definen las funciones adicionales y se trabaja con el array de post, cabe aclarar que los comentarios hacen parte de los post y si se elimina el post se eliminan sus comentarios, esto no funciona de manera inversa, es decir que si se elimina un comentario no se va a eliminar el post ya que el comentario forma parte del post pero no es indispensable, aquí se tiene entonces: Padre: post
Hijos: comentarios.

Para filtrar comentarios se trabaja con dos divs en donde si se filtran los post, los post que coincidan con la palabra clave se muestran en un div dedicado para mostrar los post que han hecho match.

Cabe aclarar entonces que los post se mueven entre el div general del post y el div dedicado para los post filtrados, asegurando que siempre se trabaje con el mismo post en cualquier caso. 

En el archivo HTML se han establecido los formularios que se utilizaran en toda la página como el formulario para crear un post, comentar o editar comentarios. Estos formularios se muestran y ocultan conforme se lo requiera.