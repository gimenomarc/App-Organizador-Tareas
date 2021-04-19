const btnAñadir = document.getElementById('btn__añadir');
const usuarioTitulo = document.getElementById('titulo');
const usuarioDescripcion = document.getElementById('descripcion');
const table = document.getElementById('table');
const btnEliminar = document.getElementById('btn__eliminar');
const btnEditar = document.getElementById('btn__editar');

/*
btnAñadir.onclick = function () {
    console.log('Titulo: ', usuarioTitulo.value);
    console.log('Descripcion: ', usuarioDescripcion.value);
}
*/

function addTodo() {
    if (usuarioTitulo.value == '' || usuarioDescripcion.value == ''){
        alert("*CAMPOS VACIOS*");
        console.error("Hay algun campo vacio")
    } else {
        console.log('Titulo: ', usuarioTitulo.value);
        console.log('Descripcion: ', usuarioDescripcion.value);
        const row = table.insertRow();
        row.innerHTML = `
            <td>${usuarioTitulo.value}</td>
            <td>${usuarioDescripcion.value}</td>
            <td>
                <input type="checkbox">
                    </td>                    
                        <td class="btn__editar">
                            <button class="btn">Editar</button>
                        </td>
                        <td class="btn__eliminar">
                            <button class="btn">Eliminar</button>
                    </td>
        `;
    }
}

btnAñadir.onclick = function(){
    addTodo();
}

