let proyectos = [
    //{ id: 1, nombre: 'Juan', puesto: 'Administrador', salario: 2500 },//
   ] ///el origen de datos - respuesta de una api//
   
   const renderizarTabla = () => {
       const tableProyectos = document.getElementById('tableProyectos')
       tableProyectos.innerHTML = ''
   
       proyectos.forEach((proyecto, index) => {
           const row = document.createElement('tr')
           row.innerHTML = `
               <td>${proyecto.id}</td>
                <td>${proyecto.nombre}</td>
               <td>${proyecto.fechaIn}</td>
               <td>${proyecto.fechafin}</td>
               <td>
                   <button id="btnEditar" onClick="editarProyectos(${index})">Editar</button>
                   <button onclick="eliminarProyectos(${index})">Eliminar</button>
               </td>
           `
   
           tableProyectos.appendChild(row)
       });
   }
   
   let editarIndex = null;
   const guardarProyectos = (event) => {
       event.preventDefault()
   
       const id = document.getElementById('id').value
       const nombre = document.getElementById('nombre').value
       const fechaIn = document.getElementById('fechaIn').value
       const fechafin = document.getElementById('fechafin').value
   
       if (!id || !nombre || !fechaIn || !fechafin) {
           alert('Por favor, complete los campos');
           return
       }
   
       if (editarIndex !== null) {
           proyectos[editarIndex] = {
               id: proyectos[editarIndex].id,
               nombre,
               fechaIn,
               fechafin
           }
           editarIndex = null
       } else {
           const nuevoProyecto = {
               id: proyectos.length + 1,
               nombre,
               fechaIn,
               fechafin
           }
   
           proyectos.push(nuevoProyecto)
       }
   
       document.getElementById('frmProyecto').reset();
       renderizarTabla()
   }
   
   const editarProyectos = (index) => {
       const proyecto = proyectos[index];

       document.getAnimations('id').value = proyecto.id;
       document.getElementById('nombre').value = proyecto.nombre;
       document.getElementById('fechaIn').value = proyecto.fechaIn;
       document.getElementById('fechafin').value = proyecto.fechafin;
   
       editarIndex = index;
   }
   
   const eliminarProyectos = (index) => {
       if (confirm('Está seguro de eliminar?')) {
           proyectos.splice(index, 1)
           renderizarTabla()
       }
   }
   
   document.getElementById('frmProyecto').addEventListener('submit', guardarProyectos);
   renderizarTabla();