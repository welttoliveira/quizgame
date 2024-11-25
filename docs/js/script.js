let nomeJogador = "";
let pontos = 0;

function iniciar() {
  nomeJogador = document.getElementById('nome').value;
    if (nomeJogador == "") {
        alert("Por favor, informe seu nome!");
        return;
    }
  document.getElementById('formulario').style.display='none';
  document.getElementById('pergunta1').style.display='block';
} 

function irpara2() {
  if (!document.querySelector('input[name="questao1"]:checked')){
    alert("Por favor, escolha uma resposta para a pergunta!");
    return;
  } 
  else if (document.getElementById("q1c").checked) {
    pontos++;
  }
  document.getElementById('irpara2').style.display='none';
  document.getElementById('pergunta2').style.display='block';

}

function irpara3() {
  if (!document.querySelector('input[name="questao2"]:checked')) {
    alert("Por favor, escolha uma resposta para a pergunta!");
    return;
  }  
  else if (document.getElementById("q2d").checked) {
    pontos++;
  }
  document.getElementById('irpara3').style.display='none';
  document.getElementById('pergunta3').style.display='block';

}
function irpara4() {
  if (!document.querySelector('input[name="questao3"]:checked')) {
    alert("Por favor, escolha uma resposta para a pergunta!");
    return;
  }  
  else if (document.getElementById("q3c").checked) {
    pontos++;
  }
  document.getElementById('irpara4').style.display='none';
  document.getElementById('pergunta4').style.display='block';

}
function finalizar() {
  if (!document.querySelector('input[name="questao4"]:checked')) {
    alert("Por favor, escolha uma resposta para a pergunta!");
    return;
  }  
  else if (document.getElementById('q4b').checked) {
    pontos++;
  }
  document.getElementById('finalizar').style.display='none';
  document.getElementById('ultimosbotoes').style.display='block';
  alert(nomeJogador + ", você acertou " + pontos + " de 4 quesões !");
}

function respostas() {
  document.getElementById('q1c').parentElement.classList.add("bg-success");
  document.getElementById('q2d').parentElement.classList.add("bg-success"); 
  document.getElementById('q3c').parentElement.classList.add("bg-success"); 
  document.getElementById('q4b').parentElement.classList.add("bg-success");
}

function reiniciar() {
  location.reload();
}