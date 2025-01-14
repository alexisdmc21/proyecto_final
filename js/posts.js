
export let posts = []

export const renderizarPosts = () => {
    const listaPosts = document.getElementById("lista-posts")
    listaPosts.innerHTML = ""

    posts.forEach((post, index) => {
        const postReds = document.createElement("div")
        postReds.innerHTML = `
        <h2>${post.titulo}</h2>
        <b>${post.descripcion}</b>
        <h4>${post.fechaCreacion}</h4>
        `
        listaPosts.appendChild(postReds)
    })
}

export let editarIndex = null

export const publicarPost = (event) => {
    
    event.preventDefault()
    const nuevoPost = {
        titulo,
        descripcion,
        fechaCreacion,
    };
    posts.push(nuevoPost);

    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("fechaCreacion").value = "";

    renderizarPosts();
};


