// exemplos relacionais

console.log(1==1)
console.log(1>2)
console.log(1!=2)
console.log(7<1)
console.log(7<=7)

console.log(5=='5') //Sim! JavaScript não testa o tipo do dado.
console.log(5==='5') //Não! === é a operação de identidade restrita do JS, também serve para diferença → !==

// exemplos lógicos

console.log(!(5>5)) // ! operador de negação
console.log(5>1 && 7>2) // && operador lógico "e"
console.log(5>1 || 7<2) // && operador lógico "ou"

// exemplos ternário

console.log(5>1?"Sim":"Não") 
console.log(5<1?"Sim":"Não")

var idade = 15

console.log(idade >= 18 ? "Maior de idade" : "Menor de idade")
