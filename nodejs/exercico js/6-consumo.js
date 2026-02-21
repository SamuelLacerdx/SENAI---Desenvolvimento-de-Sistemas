// --- Calculadora de Consumo de Combustível ---

//valor do disel em formato de texto
const precos = {
  gasolina: 5.8,
  alcool: 3.9,
  diesel: 6.20,
};

function calcularGasto(distancia, consumoKml, tipoCombustivel) {
  let precoUnitario = tipoCombustivel;

  let litrosNecessarios = distancia / consumoKml;
  let custoTotal = litrosNecessarios * precoUnitario;

  return custoTotal;
}
//valor da distancia em forma de texto
const viagem = {
  destino: "Litoral",
  distancia: 200,
  veiculo: "Corsa",
};

const resultadoGasolina = calcularGasto(viagem.distancia, 10, precos.gasolina);

console.log("Viagem para: " + viagem.destino);
console.log("Custo estimado no Diesel: R$ " + calcularGasto(200, 15, precos.diesel));
console.log("Custo estimado na Gasolina: R$ " + resultadoGasolina);

// console log no lugar de texto em constante
if (precos.alcool < 4) {
  console.log("O álcool está compensando!");
}


