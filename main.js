

function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        alert('Elemento não encontrado ou Seletor inválido');
    }
}

/* A função na linha debaixo não possui parênteses pois, do contrário
    o navegador a tocaria automaticamente quando a página fosse aberta*/
//document.querySelector('tecla_pom').onclick = tocaSomPom;

//Referência constante
const listaDeTeclas = document.querySelectorAll('.tecla');

//Variável
//let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];    
    const instrumento = tecla.classList[1];
    //String em JavaScript (Usando crases)
    const idAudio = `#som_${instrumento}`;

    /*Função anônima - pode ser utilizada para passar um valor para algum atributo*/
    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    console.log(contador);

    tecla.onkeydown = function (evento) {
        //Os três === compara também o tipo do dado
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
            tecla.classList.remove('ativa');
    }
}
