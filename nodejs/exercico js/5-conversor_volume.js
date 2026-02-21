// --- Conversor de Medidas de Fábrica ---

// numero em formato de texto
const mlPorLitro = 1000;

//colocar divisão no lugar de multiplicação
function converterMlParaLitro(quantidadeMl) {
  const resultado = quantidadeMl / mlPorLitro;
  return resultado;
}
//colocar multiplicação no lugar de soma
function converterLitroParaMl(quantidadeLitros) {
  const resultado = quantidadeLitros * mlPorLitro;
  return resultado;
}

const producaoDia = {
  lote1: 0, // ml
  lote2: 2, // litros
};

const calculoLote1 = converterMlParaLitro(producaoDia.lote1);
const calculoLote2 = converterLitroParaMl(producaoDia.lote2);

//colocar 
console.log("--- Relatório de Produção ---");
console.log(`Lote 1 ${producaoDia.lote1}: ${calculoLote1} L`);
console.log(`Lote 2 ${producaoDia.lote2}: ${calculoLote2} Ml`);

const estoqueBaixo = true;

if ((producaoDia.lote1 == 0)) {
  console.log("Atenção: Estoque zerado!");
}
