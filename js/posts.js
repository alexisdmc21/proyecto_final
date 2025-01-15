
let posts = []

export const renderizarPosts = () => {
    const listaPosts = document.getElementById("lista-posts")
    listaPosts.innerHTML = ""

    posts.forEach((post, index) => {
        const postReds = document.createElement("div")
        postReds.classList.add("post")
        postReds.innerHTML = `
        <h2>${post.titulo}</h2>
        <b>${post.descripcion}</b>
        <h4>${post.fechaCreacion}</h4>
        <button onclick="eliminarPost(${index})">Eliminar</button>
            <div id="comentarios-${index}">
                <h4>Comentarios: </h4>
                <div class="lista-comentarios"></div>
                <input type="text" placeholder="Agregar comentario" id="comentario-${index}">
                <button onclick="agregarComentario(${index})">Comentar</button>
            </div>
        `
        listaPosts.appendChild(postReds)
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



