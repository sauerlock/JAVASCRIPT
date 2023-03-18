const vagas = []

function listarVagas() {
    const vagaTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")
    alert(vagaTexto)
  }   

function novaVaga() {
    const nome = prompt("Digite o nome da vaga: ")
    const descricao = prompt("Descriçao da vaga: ")
    const dataLimite = prompt("Informe uma Data: (dd/mm/yyyy) ")
    
    const confirmacao = confirm("Finalizar e salvar? \n"
    + "Nome: " + nome + "\nDescriçao:  " + descricao + "\n Data limite: " + dataLimite
    )

    if (confirmacao) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert("Vaga criada.")
    }
}

function exibirVaga() {
    const indice = prompt("Informe o numero da vaga que deseja exibir: ")
    if (indice >- vagas.length || indice < 0) {
        alert('Invalido')
        return
    }
    
    const vaga = vagas[indice]

    const candidatosText = vaga.candidatos.reduce(function (textoFinal, candidato){
        return textoFinal + "\n - " + candidato
    }, "")
    alert(
        "Vaga N " + indice +
        "\nNome: " + vaga.nome +
        "\nDescriçao: " + vaga.descricao +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidatosText
    )
}

function inscreverCandidato() {
    const candidato = prompt('Informe o nome do candidato: ')
    const indice = prompt('Informe o indice da vaga: ')
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Desenja inscrever o candidato " + candidato + " para a vaga " + indice + " ?\n" +
        "Nome: " + vaga.nome + "\nDescriçao: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite
    )
    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscricao realizada. ")
    }
}

function excluirVaga() {
    const indice = prompt("Informe indice da vaga que deseja excluir: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\m " +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )
    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga excluida")
    }
}


function exibirMenu() {
    const opcao = prompt(
    'Selecione uma opçao:'
    + '\n1. Listar Vagas'
    + '\n2. Criar nova vaga'
    + '\n3. Visualizar uma vaga'
    + '\n4. Inscrever um candidato em uma vaga'
    + '\n5. Excluir uma vaga'
    + '\n6. Sair'
    )
    return opcao
}
function init() {
    let opcao = ""

do {
    opcao = exibirMenu()
    let decisao 

switch (opcao) {
    case "1":
        listarVagas()
    break
    case "2":
        novaVaga()
    break
    case "3":
        exibirVaga()
    break
    case "4":
        inscreverCandidato()
    break
    case "5":
        excluirVaga
    break
    case "6":
        alert("Saindo...")
    break
    default:
        alert("Opcao Invalida.")
    break
}

} while (opcao !== 6);
} 

init();