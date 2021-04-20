
/*
let div = document.createElement('div');
div.classList.add('container');

let p = document.createElement('p')
p.textContent = "BLABLA"
div.appendChild(p)

const menu = document.querySelector('.menuAñadir');
menu.appendChild(div)
*/

function createTable () {
    var table = document.createElement('table');
    table.id = "table1"
    document.appendChild(table);   

    var tr = document.createElement("tr");
    table.appendChild(tr);

    let th = document.createElement("th");
    th.innerHTML =  
    tr.appendChild(tr);

    let thh = document.createElement("th");
    th.innerHTML = `{newItem.description}` 
    tr.appendChild(tr);
}

function createDescription () {
    let tr = document.createElement('tr');
    tr.classList.add('td__th');
    let td = document.createElement('td');
    td.textContent = " Description "
    tr.appendChild(td);

    const menu = document.querySelector('.menuTable__container');
    menu.appendChild(tr)
    console.log(tr);  
}

createTable();
addTable();

//createTitle();
//createDescription();

/* 
row.innerHTML = `
            <td>
            ${usuarioTitulo.value}
            </td>
            <td>
            ${usuarioDescripcion.value}
            </td>
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
*/