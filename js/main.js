import { publicarPost, renderizarPosts } from "./posts.js";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn-crear-post").addEventListener("click", (event) => {
        event.preventDefault();

        const titulo = document.getElementById("titulo").value.trim();
        const descripcion = document.getElementById("descripcion").value.trim();
        const fechaCreacion = document.getElementById("fechaCreacion").value;

        if (!titulo || !descripcion || !fechaCreacion) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        publicarPost(titulo, descripcion, fechaCreacion);

        document.getElementById("titulo").value = "";
        document.getElementById("descripcion").value = "";
        document.getElementById("fechaCreacion").value = "";
    });
    renderizarPosts();
});