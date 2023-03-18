
//Declara array Imoveis
const imoveis = []
let opcao = " "

do {
        
opcao = prompt("Imoveis cadastrados " + imoveis.length + "\n"
    + "\n1. Salvar Imovel "
    + "\n2. Mostrar Imoveis salvos"
    + "\n3. Sair"
)  
switch (opcao) {
    case "1": 
        const imovel = {}
        imovel.nomeProp = prompt("Digite o nome do Proprietario:  ")
        imovel.numQuartos = prompt("Qual a quantidade de quartos")
        imovel.numBanheiros = prompt("Quantidade de Banheiros: ")
        imovel.temGaragem = prompt("Tem garagem? S/N ")
        
        const confirma = confirm(
            "Salvar o Imovel? \n" 
            + "\n Proprietario: " + imovel.nomeProp 
            + "\n Quartos: " + imovel.numQuartos
            + "\n Banheiros: " + imovel.numBanheiros
            + "\n Garagem: " + imovel.temGaragem
        )
        if (confirma) {
            imoveis.push(imovel)
            alert('Imovel salvo com sucesso!')
        } else {
            alert("Voltando ao menu")
        }
    break
    case "2":
        for (let i = 0; i < imoveis.length; i++) {
            alert(
                "Imovel" + (i + 1) +
                "\n Proprietario: " + imoveis[i].nomeProp 
                + "\n Quartos: " +  imoveis[i].numQuartos
                + "\n Banheiros: " + imoveis[i].numBanheiros
                + "\n Garagem: " + imoveis[i].temGaragem
            )   
        }
    break
    case "3":
        alert("Sair")
        alert("Encerrando..")
    break
    default:
        alert("opcao invalida")
    break
 }
} while (opcao !== 3);


//Menu Interativo 
// Mostrar a quantidade de imoveis cadastrados

//Opcao de salvar o imovel

//Ao Salvar: Nome, N de Quartos, N de Banheiros, Se garagem

//Opcao de mostrar todos imoveis salvos.