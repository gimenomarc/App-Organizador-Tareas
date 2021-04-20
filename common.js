const table = document.getElementById('table');
const btnAdd = document.getElementById('btn__añadir');
const btnRemove = document.getElementById('btn__eliminar');
const itemTitle = document.getElementById('titulo');
const itemDescription = document.getElementById('descripcion');

const items = []

function createRow(id,title,description){
    const row = table.insertRow();
    row.setAttribute('id', id);
    row.innerHTML = renderTable(title,description);
}

function renderTable(title,description){
    return`<td>${title}</td><td>${description}</td><td><input type="checkbox"></td><td class="btn__editar"><button class="btn">Editar</button></td><td class="btn__eliminar"><button class="btn">Eliminar</button></td>`;
}

btnAdd.onclick = function(){
    const newItem = new Item(itemTitle.value,itemDescription.value)
    items.push(newItem)
    createRow(newItem.id,newItem.title,newItem.description);
}

btnRemove.onclick = function(){
    //items.

}


/*
class Item{
    constructor(title,description){
        this.id = Date.now()
        this.title = title;
        this.description = description;
        this.isCompleted = false;
    }
}
*/ 










/*
                                      /;    ;\
                                  __  \\____//
                                 /{_\_/   `'\____
                                 \___   (o)  (o  }
      _____________________________/          :--'
  ,-,'`@@@@@@@@       @@@@@@         \_    `__\
 ;:(  @@@@@@@@@        @@@             \___(o'o)
 :: )  @@@@          @@@@@@        ,'@@(  `===='
 :: : @@@@@:          @@@@         `@@@:
 :: \  @@@@@:       @@@@@@@)    (  '@@@'
 ;; /\      /`,    @@@@@@@@@\   :@@@@@)
 ::/  )    {_----------------:  :~`,~~;
;;'`; :   )                  :  / `; ;
;;;; : :   ;                  :  ;  ; :
`'`' / :  :                   :  :  : :
   )_ \__;      ";"          :_ ;  \_\       `,','
   :__\  \    * `,'*         \  \  :  \   *  8`;'*
       `^'     \ :/           `^'  `-^-'   \v/ :

*/