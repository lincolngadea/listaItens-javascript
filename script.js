let lista = document.querySelector('#lista');

//lista.innerHTML = '';
document.getElementById('form').addEventListener('click',(event)=>{
    event.preventDefault()});


function cadastrar(){
    
   //bloco de inserção dos dados na lista 
    let li = document.createElement('li');
    let inputValue = document.getElementById('data').value;
    let dt = document.createTextNode(inputValue);
    if(inputValue === ''){
        alert('O Campo não pode estar vazio');
        return false;
    }else{
        document.getElementById('myUl').appendChild(li);
        li.appendChild(dt);
        document.getElementById('data').value = '';
    }   
}


//função em implementação
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