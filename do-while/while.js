const touristName = prompt('Whats your name? ')
let ask = prompt('Voce ja viajou pra alguma cidade? (Sim/Nao)')
let contagem = 0
let cidades = ""

while (ask === 'Sim') {
    let city = prompt('Where did have travel to? ')
    cidades += " - " + city + "\n"
    contagem++
    ask = prompt(" Mais alguma cidade? (Sim/Nao)")
}

alert('Turista: ' + 
touristName + 
'\n Quantidade de lugares visitados: ' + contagem +
'\n Cidades Visitadas:  ' + cidades
)