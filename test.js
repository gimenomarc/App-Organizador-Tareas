

let div = document.createElement('div');
div.classList.add('container');

let p = document.createElement('p')
p.textContent = "BLABLA"
div.appendChild(p)

const menu = document.querySelector('.menuAñadir');
menu.appendChild(div)

function createItems () {
    let tr = document.createElement('tr');
    tr.classList.add('td');
    let td = document.createElement('td');
    td.textContent = " hello "
    tr.appendChild(td);

    const menu = document.querySelector('.menuTable__container');
    menu.appendChild(tr)
    console.log(tr);    
}



createItems();












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