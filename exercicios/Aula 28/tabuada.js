
let numero = parseFloat(prompt('Digite um numero: '))
let resultado = ''

for (let i = 1; i <= 20; i++) {
    resultado += i + ' * ' + numero + ' = ' + (i * numero) + '\n'
}
alert(resultado)

