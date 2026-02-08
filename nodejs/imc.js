// Abaixo do peso: IMC menor que 18,5
// Peso ideal: IMC entre 18,5 e 24,9
// Sobrepeso: IMC entre 25 e 29,9
// Obesidade: IMC igual ou maior que 30 

let nome = 'Samuel', altura = 1.50, peso = 100

resultado = altura * altura
total = peso / resultado

console.log(`O imc do paciente é:${total}`)

if (total < 18.50)
{
    console.log(`O Paciente ${nome} esta abaixo do peso`)
 
}

else if (total >= 18.50 && total <= 24.90)
{    
    console.log(`O Paciente ${nome} esta no Peso ideal`)
}

else if (total >=25 && total <=29.9)
{
    console.log(`O Paciente ${nome} esta com Sobrepeso`)
}

else if (total >= 30)
{
    console.log(`O Paciente ${nome} esta com Obesidade`)
}
