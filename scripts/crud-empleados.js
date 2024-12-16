const frmEmpleados = document.getElementById("frmEmpleados");
const hideButton = document.querySelector("#hideButton");

hideButton.addEventListener('click', () => {
    if (frmEmpleados.style.display === 'none') {
        frmEmpleados.style.display = 'block';
        hideButton.textContent = 'Cancelar';
    } else {
        frmEmpleados.style.display = 'none';
        hideButton.textContent = '+ Agregar empleado'; 
    }
});

let empleados =JSON.parse(localStorage.getItem('empleados')) || []

const renderizarTabla = () => {
    const tableEmpleados = document.getElementById('tableEmpleados')
    tableEmpleados.innerHTML = ''

    empleados.forEach((empleado, index) => {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${empleado.id}</td>
             <td>${empleado.nombre}</td>
            <td>${empleado.puesto}</td>
            <td>${empleado.salario}</td>
            <td>
                <button id="btnEditar" class="btn btn-warning" onClick="editarEmpleados(${index})">Editar</button>
                <button class="btn btn-danger" onclick="eliminarEmpleado(${index})">Eliminar</button>
            </td>
        `

        tableEmpleados.appendChild(row)
    });
}

let editarIndex = null;
const guardarEmpleados = (event) => {
    event.preventDefault()

    const id=document.getElementById('id').value
    const nombre = document.getElementById('nombre').value
    const puesto = document.getElementById('puesto').value
    const salario = document.getElementById('salario').value

    if (editarIndex !== null) {
        empleados[editarIndex] = {
            id,
            nombre,
            puesto,
            salario
        }
        editarIndex = null
    } else {
        const nuevoEmpleado = {
            id,
            nombre,
            puesto,
            salario
        }

        empleados.push(nuevoEmpleado)
    }

    localStorage.setItem('empleados', JSON.stringify(empleados))

    document.getElementById('frmEmpleados').reset();
    renderizarTabla()
}

const editarEmpleados = (index) => {
    const empleado = empleados[index];

    document.getElementById('id').value = empleado.id;
    document.getElementById('nombre').value = empleado.nombre;
    document.getElementById('puesto').value = empleado.puesto;
    document.getElementById('salario').value = empleado.salario;

    editarIndex = index;
}

const eliminarEmpleado = (index) => {
    if (confirm('Está seguro de eliminar?')) {
        empleados.splice(index, 1)
        localStorage.setItem('empleados', JSON.stringify(empleados))
        renderizarTabla()
    }
}

document.getElementById('frmEmpleados').addEventListener('submit', guardarEmpleados);
renderizarTabla();