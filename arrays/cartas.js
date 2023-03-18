let baralho = ["A", "2", "3", "4", "5", "6"," 7", "8", "9", "10", "J", "Q", "K"]
let opcao = ""


do {
    for (let indice = 0; indice < baralho.length; indice++) {
       
opcao = prompt(baralho.length + 
    "\nSelecione uma opcao:"
    + "\n1. Adicionar uma carta"
    + "\n2. Retire uma Carta"
    + "\n3. Sair"
)

switch (opcao) {
    case "1":
        const cartaNova = prompt('Adicionar uma carta ')
        baralho.unshift(cartaNova)
    break
    case "2":
        let showCard = baralho.shift(indice)
        alert('A carta retirada é: ' + showCard)
    break
    case "3":
        alert('Você escolheu sair, até logo!')
    break
}
}
}while (opcao !== "3");