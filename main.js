const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date ("2024-10-05T00:00:00");
contadores[0]
contadores[0].textContent= calculdoraTempo (tempoObjetivo1);

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
}