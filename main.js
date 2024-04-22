const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date ("2024-10-05T00:00:00");
const tempoObjetivo2 = new Date ("2024-10-05T00:00:00");
const tempoObjetivo3 = new Date ("2024-10-05T00:00:00");
const tempoObjetivo4 = new Date ("2024-10-05T00:00:00");
const tempos=[tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

contadores[0]
contadores[0].textContent= calculdoraTempo (tempos [0]);
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}  function calculadoraTempo (tempoObjetivo){
     let tempoAtual = new Date();
     let tempoFinal = tempoObjetivo - tempoAtual;
     let segundos = Math.floor (tempoFinal / 1000); 
     let minutos = Marh.floor (segundos / 60);
     let horas = Math.floor(minutos / 60); 
     let dias= math.floor(horas/24)
     segundos%=60;
     minutos%=60;
     horas%=24;

     if(tempofinal>0){
        return dias + " dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";

     }     
     else{
        return [0,0,0,0];
     }                                                                                                      0   



}

function atualizadaCronometro(){
    document.getElementById("dias0").textContent= calculadoraTempo( tempos[0]);
for (let i=0; i< contadores.length; i++){
 //contadores[i].textContent= calculdoraTempo(tempos[i]);

}
}
atualizadaCronometro();
setInterval(atualizaCronometro, 1000);
function atualizaCronometro(){
    for (let i=0; i<contadores.lenght;i++);{
        contadores[i].textContent = calculatempo (tempos[i]);
    }
}
     atualizaCronometro();
     sentInterval(atualizaCronometro(), 1000); 