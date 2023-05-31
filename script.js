function calcular () {
    //Declarei as minhas variáveis pra puxar os valores do HTML
                var peso = window.document.getElementById('ipeso')
                var altura = window.document.getElementById('ialtura')
                var res = window.document.getElementById('resultado')
    //Atribuí a novas variáveis para fazer os cáculos
                var pesof = Number(peso.value)
                var alturaf = Number(altura.value)
                var imc = pesof / (alturaf * alturaf)
    
    //Mostrei na tela as duas primeiras partes
                res.innerHTML = `Seu IMC: ${imc.toFixed(2)} <br>`
    
    //Atribuindo as condições e mostrando-as
                if (imc < 18.5) {
                    res.innerHTML += "<br>Você está abaixo do peso. Sugestão de alimentação: Receita A para ganho de peso."
                } else if (imc >= 18.5 && imc <=24.9) {
                    res.innerHTML += "<br>Você está com peso normal. Sugestão de alimentação: Receita B para manutenção de peso."
                } else if (imc >= 25) {
                    res.innerHTML += "<br>Você está acima do peso. Sugestão de alimentação: Receita C para perda de peso."
                }
            }
