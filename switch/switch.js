let valorMetros = prompt('Digite a medida em Metros: ')
let unidadeMedida = prompt('Escolha para qual unidade deseja converter: ' + '\n- MM' + '\n- CM' + '\n- DM' + '\n- DAM' +  '\n- HM' + '\n- KM')



switch(unidadeMedida) {
    case 'MM':
        conversao = valorMetros  * 1000
        alert('A medida de  ' + valorMetros + ' Metros ' +'convertida em ' + unidadeMedida + ' é igual a ' + conversao + ' MM' )
        break
    case 'CM':
        conversao = valorMetros  * 100
        alert('A medida de ' + valorMetros + ' Metros ' +'convertida em ' + unidadeMedida + ' é igual a ' + conversao + ' CM' )
        break
    case 'DM':
        conversao = valorMetros  * 10
        alert('A medida de ' + valorMetros+ ' Metros ' +'convertida em ' + unidadeMedida + ' é igual a ' + conversao + ' DM' )
        break
    case 'DAM':
        conversao = valorMetros / 10
        alert('A medida de ' + valorMetros+ ' Metros ' +'convertida em ' + unidadeMedida + ' é igual a ' + conversao + ' DAM' )
        break
    case 'HM':
        conversao = valorMetros  / 100
        alert('A medida de ' + valorMetros+ ' Metros ' +'convertida em ' + unidadeMedida + ' é igual a ' + conversao + ' HM' )
        break
    case 'KM': 
        conversao = valorMetros  / 1000
        alert   ('A medida de ' + valorMetros + ' Metros ' +'convertida em ' + unidadeMedida + ' é igual a ' + conversao +' KM')
        break
    default:
        alert("Opção Invalida!")

}