const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

//   const nomes = []
  
//   for (let i = 0; i < personagens.length; i++) {
//     nomes.push(personagens[i].nome)
//   }

// ,map
// let nomes = personagens.map(function (personagem){
//     return personagem.nome
// })

// .filter
// const orcs = personagens.filter(function (personagem){
//         return personagem.raca === "Orc"
//     })

// .reduce
// const racas = personagens.reduce(function (valorAcumulado, personagem) {
//     if (valorAcumulado[personagem.raca]) {
//         valorAcumulado[personagem.raca].push(personagem)
//     } else {
//         valorAcumulado[personagem.raca] = [personagem]
//     }

//     return valorAcumulado
// }, {})


// .sort
personagens.slice().sort(function(a, b) {
    return a.nivel - b.nivel
})

  console.log(personagens);