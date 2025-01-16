import { mostrarComentarios } from "./comments.js";

let posts = []

export const renderizarPosts = () => {
    const listaPosts =$('#lista-posts')
    listaPosts.empty();

    posts.forEach((post, index) => {
        const $postReds = $('<div></div>')
            .addClass('post')
            .html(`
                <h2>${post.titulo}</h2>
                <b>${post.descripcion}</b>
                <h4>${post.fechaCreacion}</h4>
            `);
    
        const $buttonEliminar = $('<button></button>')
            .text('Eliminar post')
            .on('click', () => eliminarPost(index));

        const $aggComentario =$('<button></button>')
            .text('Agregar comentario')
            .on('click', ()=> mostrarComentarios(index))
    
        $postReds.append($buttonEliminar, $aggComentario);
        $('#lista-posts').append($postReds);
        $postReds.fadeIn(500);
    })
}

export const publicarPost = (titulo, descripcion, fechaCreacion) => {

    const nuevoPost = {
        titulo,
        descripcion,
        fechaCreacion,
        comentarios:[]
    };
    posts.push(nuevoPost)
};

export const obtenerPosts = () => posts;


