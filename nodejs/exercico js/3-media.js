// --- Sistema de média de alunos ---
// O objetivo deste código é calcular a média de um aluno com base em suas notas e determinar se ele foi aprovado ou reprovado. Identifique os erros presentes no código e corrija-os para que o sistema funcione corretamente.

const nomeAluno = "Mariana";
const nota1 = 8;
const nota2 = 5;

//colocar return no lugar de let
function calcularMedia() {
return media = (nota1 + nota2) / 2;
}

calcularMedia();
//status é uma função, por isso foi trocado o nome para stats
if (media >= 7) {
  stats = "Aprovado";
} 
else {
  stats = "Reprovado";
}

//trocar as "" por ``, status é uma função, por isso foi trocado o nome para stats
console.log(`O aluno ${nomeAluno} está: ${stats}`);
