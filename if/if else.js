const nome1 = prompt('Enter Player1 Name: ')
let ATK1 = prompt('Player1 ATK POWER: ')

const nome2  = prompt('Enter Player2 Name: ')
let vida = prompt('Quanto de vida tem o player2? ')
let DEF2  = prompt('Player2 DEF POWER: ') 
const SHIELD = prompt('Does player2 has a Shield?\n' + ' Y or N?')

let danoCausado = 0

if(ATK1 > DEF2 && SHIELD == 'N' || 'n') {
    danoCausado = ATK1 - DEF2
} else if(ATK1 > DEF2 && SHIELD == 'Y' || 'y'){
    danoCausado = (ATK1 - DEF2) / 2
} else if(ATK1 <= DEF2) {
    }

vida -= danoCausado

alert(nome1 + ' causou ' + danoCausado + " pontos de dano " + nome2)
alert(nome2 + 'Ficou com quantos' + '\nPontos de vida: ' + vida)