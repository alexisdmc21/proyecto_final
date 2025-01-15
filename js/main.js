import { publicarPost, renderizarPosts } from "./posts.js"

document.getElementById('btn-crear-post').addEventListener('click', (event) => {
    event.preventDefault()

    // Obtener valores del formulario

    const titulo = document.getElementById('titulo').value
    const descripcion = document.getElementById('descripcion').value
    const fechaCreacion = document.getElementById('fechaCreacion').value

    // Validar campos
    if (!titulo || !descripcion || !fechaCreacion) {
        alert("Existen campos sin llenar!!")
        return
    }

    // Crear el post
    publicarPost(titulo, descripcion, fechaCreacion)

    // Limpiar el formulario
    document.getElementById('titulo').value = ''
    document.getElementById('descripcion').value = ''
    document.getElementById('fechaCreacion').value = ''

    // Renderizar los posts actualizados
    renderizarPosts()
});
