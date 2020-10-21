let lista = document.querySelector('.lista');


document.getElementById('form').addEventListener('click',(event)=>{
    event.preventDefault()});

    if(document.getElementsByTagName('li').length == 0){
        lista.style.display ='none';
    }
    

function cadastrar(){
    
   //bloco de inserção dos dados na lista 
    let li = document.createElement('li');
    let inputValue = document.getElementById('data').value;
    let dt = document.createTextNode(inputValue);
    if(inputValue === ''){
        alert('O Campo não pode estar vazio');
        return false;
    }else{
        lista.style.display ='block';
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