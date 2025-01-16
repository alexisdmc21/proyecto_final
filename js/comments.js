import { obtenerPosts} from './posts.js';

export const mostrarComentarios = (index) => {
    const $comentariosDiv = $(`#comentarios-${index}`);

    if ($comentariosDiv.length === 0) {
        const $comentariosReds = $(`
            <div id="comentarios-${index}" class="comentarios">
                <h4>Comentarios:</h4>
                <div class="lista-comentarios"></div>
                <input type="text" placeholder="Escribe un comentario" id="comentario-${index}">
                <button id="btn-comentar-${index}">Comentar</button>
            </div>
        `)

        $comentariosReds.find(`#btn-comentar-${index}`).on('click', () => {
            agregarComentario(index);
        });

        $(`#lista-posts .post:eq(${index})`).append($comentariosReds);
    } else {
        $comentariosDiv.toggle(); // Alternar visibilidad si ya existe
    }
};

const agregarComentario = (index) => {
    const posts = obtenerPosts(); 
    const comentario = $(`#comentario-${index}`).val();

    if (!comentario) {
        alert("Comentario vacío!!");
        return;
    }

    posts[index].comentarios.push(comentario);

    const $listaComentarios = $(`#comentarios-${index} .lista-comentarios`);
    $listaComentarios.append(`<p>${comentario}</p>`);
    
    $(`#comentario-${index}`).val('');
};
