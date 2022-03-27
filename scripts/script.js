let jogador1 = document.querySelectorAll('.jogador1 div > img');
let jogador2 = document.querySelectorAll('.jogador2 div > img');

jogador1_Opt = "";
jogador2_Opt = "";

//Lógica para validar a vitória
function validarVitoria(){
    let vencedor = document.querySelector('.vencedor');
    let perguntaUsuario = document.querySelector('.perguntaUsuario');
    let jogadores = document.querySelector('#jogadores');

    if(jogador1_Opt == "pedra"){
        if(jogador2_Opt == "pedra"){
            vencedor.innerHTML = "O jogo empatou";
            setTimeout(() => {
                perguntaUsuario.style.display = "block";
                jogadores.classList.add("ocultar");
            }, 1000);

        }else if(jogador2_Opt == "papel"){
            vencedor.innerHTML = "A máquina ganhou";
            setTimeout(() => {
                perguntaUsuario.style.display = "block";
                jogadores.classList.add("ocultar");
            }, 1000);

        }else if(jogador2_Opt == "tesoura"){
            vencedor.innerHTML = "Você ganhou";
            setTimeout(() => {
                perguntaUsuario.style.display = "block";
                jogadores.classList.add("ocultar");
            }, 1000);
        }
    }

    if(jogador1_Opt == "papel"){
        if(jogador2_Opt == "pedra"){
            vencedor.innerHTML = "Você ganhou";
            setTimeout(() => {
                perguntaUsuario.style.display = "block";
                jogadores.classList.add("ocultar");
            }, 1000);

        }else if(jogador2_Opt == "papel"){
            vencedor.innerHTML = "O jogo empatou";
            setTimeout(() => {
                perguntaUsuario.style.display = "block";
                jogadores.classList.add("ocultar");
            }, 1000);

        }else if(jogador2_Opt == "tesoura"){
            vencedor.innerHTML = "A máquina ganhou";
            setTimeout(() => {
                perguntaUsuario.style.display = "block";
                jogadores.classList.add("ocultar");
            }, 1000);
        }
    }

    if(jogador1_Opt == "tesoura"){
        if(jogador2_Opt == "pedra"){
            vencedor.innerHTML = "A máquina ganhou";
            setTimeout(() => {
                perguntaUsuario.style.display = "block";
                jogadores.classList.add("ocultar");
            }, 1000);

        }else if(jogador2_Opt == "papel"){
            vencedor.innerHTML = "Você ganhou";
            setTimeout(() => {
                perguntaUsuario.style.display = "block";
                jogadores.classList.add("ocultar");
            }, 1000);

        }else if(jogador2_Opt == "tesoura"){
            vencedor.innerHTML = "O jogo empatou";
            setTimeout(() => {
                perguntaUsuario.style.display = "block";
                jogadores.classList.add("ocultar");
            }, 1000);
        }
    }

    let carregarPagina = document.querySelector('#sim');
        carregarPagina.addEventListener("click", function() {

        location.reload();
    });
}

//Lógica para o lance do jogador 2(máquina), de forma aleatória
function jogadaMaquina(){
    let rand = Math.floor(Math.random()*3);

    for(var i = 0; i < jogador2.length; i++){
        if(i == rand){
            jogador2[i].style.opacity = 1;
            jogador2_Opt = jogador2[i].getAttribute('opt');
        }
    }

    validarVitoria();
}

//Lógica para o lance do jogador 1(usuário)
for(var i = 0; i < jogador1.length; i++){
    jogador1[i].addEventListener('click', (t)=>{
        t.target.style.opacity = 1;  //Quando a imagem escolhida for clicada, a opacidade dela passará a ter valor 1
        jogador1_Opt = t.target.getAttribute('opt'); //Pega o valor da imagem clicada e guarda na variavel para ser usada na logica da competição

        jogadaMaquina();
    })
}

//Lógica para quando o usuário apertar o botão não

let nao = document.getElementById('nao').addEventListener('click', ()=>{
    let body = document.querySelector('body');
    let adeus = document.querySelector('.js-adeus');
    let ateBreve = document.querySelector('.texto h2');
    let titulo = document.querySelector('.titulo');
    let footer = document.querySelector('.redes-sociais');
    body.style.backgroundColor = "#EF5480";
    adeus.style.display = "none";
    titulo.style.display = "none";
    footer.style.backgroundColor = "#EF5480"
    setTimeout(() => {
        ateBreve.style.display = "block";
    }, 1000);
})
