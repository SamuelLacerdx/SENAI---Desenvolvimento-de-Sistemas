// --- Sistema de compras ---
// O objetivo deste código é simular um sistema de compras simples, onde o usuário pode aplicar um desconto em um produto e atualizar o estoque. Identifique os erros presentes no código e corrija-os para que o sistema funcione corretamente.

// preco estava em forma de texto e usando virgula, quando for para usar usar numeros inteiros temos que uar o padrão americano que é a virgula
const produto = {
  nome: "Teclado Gamer",
  preco: 150.00,
  estoque: 10,
};

// Desconto em porcentagem
function aplicarDesconto(valor) {
  return valor - (20/100 * valor) ;
}
//o certo era produto.preco, estava apenas preco
const precoFinal = aplicarDesconto(produto.preco);
// o numero um estava escrito por extenso e em forma de texto
produto.estoque = produto.estoque - 1;

console.log("Produto: " + produto.nome);
console.log("Preço com desconto: " + precoFinal);
console.log("Estoque atual: " + produto.estoque);
