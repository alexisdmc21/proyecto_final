let empleados = [] 

///PRUEBA

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
                <button id="btnEditar" onClick="editarEmpleados(${index})">Editar</button>
                <button onclick="eliminarEmpleado(${index})">Elimninar</button>
            </td>
        `

        tableEmpleados.appendChild(row)
    });
}

let editarIndex = null;
const guardarEmpleados = (event) => {
    event.preventDefault()

    const nombre = document.getElementById('nombre').value
    const puesto = document.getElementById('puesto').value
    const salario = document.getElementById('salario').value

    

    if (editarIndex !== null) {
        empleados[editarIndex] = {
            id: empleados[editarIndex].id,
            nombre,
            puesto,
            salario
        }
        editarIndex = null
    } else {
        const nuevoEmpleado = {
            id: empleados.length + 1,
            nombre,
            puesto,
            salario
        }

        empleados.push(nuevoEmpleado)
    }

    document.getElementById('frmEmpleados').reset();
    renderizarTabla()
}

const editarEmpleados = (index) => {
    const empleado = empleados[index];

    document.getElementById('nombre').value = empleado.nombre;
    document.getElementById('puesto').value = empleado.puesto;
    document.getElementById('salario').value = empleado.salario;

    editarIndex = index;
}

const eliminarEmpleado = (index) => {
    if (confirm('Está seguro de eliminar?')) {
        empleados.splice(index, 1)
        renderizarTabla()
    }
}

document.getElementById('frmEmpleados').addEventListener('submit', guardarEmpleados);
renderizarTabla();