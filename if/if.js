const VA = prompt("Insira o nome do veiculo: ")
const VelA = prompt("Velocidade: ")
const VB = prompt("Insira o nome do veiculo:  ")
const VelB = prompt(" Velocidade: ")

if (VelA > VelB) {
    alert('Veiculo ' + VA + 'é mais rapido')
} else if (VelA < VelB) {
    alert('Veiculo ' + VB + 'é mais rapido')
} else if (VelA === VelB){
    alert('Ambos tem a mesma velocidade')
}
 

 