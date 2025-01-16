import { publicarPost, renderizarPosts } from './posts.js';

document.getElementById('btn-crear-post').addEventListener('click', (event) => {
    event.preventDefault()

    // Obtener valores del formulario

    const titulo = $('#titulo').val()
    const descripcion = $('#descripcion').val()
    const fechaCreacion = $('#fechaCreacion').val()

    // Validar campos
    if (!titulo || !descripcion || !fechaCreacion) {
        alert("Existen campos sin llenar!!")
        return
    }

    // Crear el post
    publicarPost(titulo, descripcion, fechaCreacion)

    // Limpiar el formulario

    $('#titulo').val('')
    $('#descripcion').val('')
    $('#fechaCreacion').val('')

    // Renderizar los posts actualizados
    renderizarPosts()
});
