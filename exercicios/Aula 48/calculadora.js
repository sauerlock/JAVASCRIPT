    function calcAreaTriang() {
        const b = parseFloat(prompt("Digite o valor da base: " ))
        const a = parseFloat(prompt("Digite o valor da area: " ))
        return b * a / 2 
    }

    function calcAreaRetang() {
        const b = parseFloat(prompt("Digite o valor da base: " ))
        const a = parseFloat(prompt("Digite o valor da area: " ))
        return b * a
    }
    function calcAreaQuad() {
        const a = parseFloat(prompt("Digite o valor da area do quadrado: " ))
        return a * a
    }
    function calcAreaTrapezio() {
        const Bm = parseFloat(prompt("Digite o valor da base maior do Trapezio: " ))
        const Bn = parseFloat(prompt("Digite o valor da base menor do Trapezio: " ))
        const a = parseFloat(prompt("Digite o valor da altura do Trapezio: " ))
        return (Bm + Bn) * a / 2
    }
    function calcAreaCirculo() {
        const r = parseFloat(prompt("Digite o valor da base: " ))
        return 3.14 * (r * r)
    }
    function exibirMenu() {
        return prompt("Selecione uma opçao de calculo:  "
        + "\n1. Area do triangulo "  
        + "\n2. Area do retângulo "  
        + "\n3. Area do quadrado "  
        + "\n4. Area do trapézio "  
        + "\n5. Area do círculo " 
        + "\n6. Sair" 
     )
    }
     function executar() {
        let opcao = ""

    do {
        opcao = exibirMenu()
        let resultado

    switch (opcao) {
        case "1":
            resultado = calcAreaTriang()
        break
        case "2":
            resultado = calcAreaRetang()
        break
        case "3":
            resultado = calcAreaQuad()
        break
        case "4":
            resultado = calcAreaTrapezio()
        break
        case "5":
            resultado = calcAreaCirculo()
        break
        case "6":
            alert("Sair")
        break
        default:
        break
            }

        if (resultado) {
            alert("Resultado: " + resultado)
        }

        } while (opcao != "6");
    }

    executar();