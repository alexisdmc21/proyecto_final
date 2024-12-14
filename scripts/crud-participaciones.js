let participaciones = JSON.parse(localStorage.getItem('participaciones')) || [];

const renderizarTabla = () => {

    const tableParticipaciones = document.getElementById('tableParticipaciones')
    tableParticipaciones.innerHTML = ''

    const empleados = JSON.parse(localStorage.getItem('empleados')) || []
    const proyectos = JSON.parse(localStorage.getItem('proyectos')) || []

    participaciones.forEach((participacion, index) => {

        const empleado = empleados.find(emp => emp.id == participacion.id_em)
        const proyecto = proyectos.find(proj => proj.id == participacion.id_pr)

        if (empleado && proyecto) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${participacion.id_em}</td>
                <td>${empleado.nombre}</td>
                <td>${participacion.id_pr}</td>
                <td>${proyecto.nombre}</td>
                <td>${participacion.rol}</td>
                <td>
                    <button id="btnEditar" onClick="editarParticipaciones(${index})">Editar</button>
                    <button onclick="eliminarParticipaciones(${index})">Eliminar</button>
                </td>
           `

            tableParticipaciones.appendChild(row)

        }
    });
}

let editarIndex = null;
const guardarParticipaciones = (event) => {
    event.preventDefault()

    const id_em = document.getElementById('id_em').value
    const id_pr = document.getElementById('id_pr').value
    const rol = document.getElementById('rol').value

    if (!id_em || !id_pr || !rol) {
        alert('Por favor, complete los campos');
        return
    }

    const empleados = JSON.parse(localStorage.getItem('empleados')) || [];
    const proyectos = JSON.parse(localStorage.getItem('proyectos')) || [];

    const empleadoExistente = empleados.find(emp => emp.id == id_em);
    const proyectoExistente = proyectos.find(proj => proj.id == id_pr);

    if (!empleadoExistente) {
        alert('El empleado con este ID no existe');
        return;
    }

    if (!proyectoExistente) {
        alert('El proyecto con este ID no existe');
        return;
    }

    if (editarIndex !== null) {
        participaciones[editarIndex] = {
            id_em,
            id_pr,
            rol
        }
        editarIndex = null
    } else {
        const nuevaParticipacion = {
            id_em,
            id_pr,
            rol
        }

        participaciones.push(nuevaParticipacion)
    }

    localStorage.setItem('participaciones', JSON.stringify(participaciones));

    document.getElementById('frmParticipacion').reset();
    renderizarTabla()
}

const editarParticipaciones = (index) => {
    const participacion = participaciones[index];

    document.getElementById('id_em').value = participacion.id_em;
    document.getElementById('id_pr').value = participacion.id_pr;
    document.getElementById('rol').value = participacion.rol;

    editarIndex = index;
}

const eliminarParticipaciones = (index) => {
    if (confirm('Está seguro de eliminar?')) {
        participaciones.splice(index, 1)
        localStorage.setItem('participaciones', JSON.stringify(participaciones))
        renderizarTabla()
    }
}

document.getElementById('frmParticipacion').addEventListener('submit', guardarParticipaciones);
renderizarTabla();