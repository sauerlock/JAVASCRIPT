let disponivel = parseFloat(prompt('Valor disponivel: '))

let opcoes = prompt('Seu saldo disponivel é: ' 
+' R$ '+ disponivel 
+ ' \nEscolha uma das opçoes:' 
+ '\n1) Retirar'
+ '\n2) Adicionar' 
+ '\n3) Sair'
) 

if(opcoes == '1') {
  let retirar = parseFloat(prompt('Qual valor deseja retirar? '))
    alert('Você retirou ' +'R$: ' + retirar)
    alert('Seu saldo é de R$: ' + (disponivel - retirar))
    alert('Operaçao Encerrada.')    
 } else if (opcoes == '2') {
    let adicionar = parseFloat(prompt('Qual valor deseja adicionar? '))
    alert('Seu saldo é ' +'R$: ' + (disponivel + adicionar))
    alert('Operaçao Encerrada.')
 } else {
    alert('Operaçao Encerrada.')    
    alert('Até logo')
}




// switch (opcoes) {
//     case '1': 
//     alert(' ')
//     break
//     case '2': 
//     alert(' ')
//     break
//     case '3': 
//     alert(' ')
//     break
//     default :
//     alert('Opçao Invalida')
//     break

// }