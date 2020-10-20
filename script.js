let lista = document.querySelector('.lista');

lista.innerHTML = '';
document.getElementById('form').addEventListener('click',(event)=>{
    event.preventDefault()});


function cadastrar(){
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let dt = document.createTextNode(document.querySelector("[name='item']").value);

    li.appendChild(dt);
    ul.appendChild(li);
    lista.appendChild(ul);
}

function createButton(){

    let bt = document.createElement('button');
    let lbl = document.createTextNode('Limpar');
    bt.appendChild(lbl);
    bt.onclick = ()=>{
        console.log('botão');
    };
}

if(lista.innerHTML !== ''){
    createButton();
}
console.log('lista =',lista.value);