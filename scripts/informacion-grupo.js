const loadInfo = () => {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h2>Información del Grupo</h2>
        <p>Nombre: Equipo de Desarrollo</p>
        <p>Integrantes:</p>
        <ul>
            <li>Desarrollador 1 - Líder</li>
            <li>Desarrollador 2 - Frontend</li>
            <li>Desarrollador 3 - Backend</li>
        </ul>
    `;const imagen = document.getElementById('img2');
    if (imagen.style.display === 'none') {
        imagen.style.display = 'none'; // Mostrar la imagen si está oculta
    } else {
        imagen.style.display = 'none'; // Ocultar la imagen si está visible
    }
};