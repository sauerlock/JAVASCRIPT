let fila = []
let opcao = " "

do {
    let pacientes = " " 
    for (var i = 0; i < fila.length; i++) {
        pacientes += (i + 1) + "º " + fila[i] + "\n"
} 

opcao = prompt("Pacientes:\n" + pacientes 
+ "\nEscolha uma ação: \n 1. Novo Paciente \n 2. Consultar paciente \n 3. Sair")

switch (opcao) {
    case "1":
        const novoPaciente = prompt("Digite o nome do novo Paciente ")
        fila.push(novoPaciente)
    break
    case "2":
        const pacienteSelecionado = fila.shift(i)
        alert(pacienteSelecionado + " foi removido da fila.")
    break
    case "3":
        alert('Você escolheu encerrar')
        alert('Até logo')
    break    
 }
} while (opcao !== '3')