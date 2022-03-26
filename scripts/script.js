let jogador1 = document.querySelectorAll('.jogador1 div > img');
let jogador2 = document.querySelectorAll('.jogador2 div > img');

jogador1_Opt = "";
jogador2_Opt = "";

//Lógica para o lance do jogador 2(máquina), de forma aleatória
function jogadaMaquina(){
    let rand = Math.floor(Math.random()*3);

    for(var i = 0; i < jogador2.length; i++){
        if(i == rand){
            jogador2[i].style.opacity = 1;
            jogador2_Opt = jogador2[i].getAttribute('opt');
        }
    }
}

//Lógica para o lance do jogador 1(usuário)
for(var i = 0; i < jogador1.length; i++){
    jogador1[i].addEventListener('click', (t)=>{
        t.target.style.opacity = 1;  //Quando a imagem escolhida for clicada, a opacidade dela passará a ter valor 1
        jogador1_Opt = t.target.getAttribute('opt'); //Pega o valor da imagem clicada e guarda na variavel para ser usada na logica da competição

        jogadaMaquina();
    })
}
