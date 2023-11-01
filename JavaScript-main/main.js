function tocaSomPom(){
const elemneto = document.querySelector('#som_tecla_pom').play('')
}


if(elemento != null && elemento.localName === 'audio'){
    elemento.play();
}else{
    alert('Elemento não encontrado');
}
const lista = document.querySelectorAll('.tecla');

for(contador = 0; contador < lista.length;contador++)
{
    lista [contador].classList[1];

    const instrumento = lista[contador];
    const tecla = lista[contador];
    const idAudio = `#som_${instrumento}`;

    tecla[contador].onclick = function (){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento){
        if(evento.code=='Space' || evento.code ==='Enter'){
            tecla.classList.add('ativa');}
    }
    }