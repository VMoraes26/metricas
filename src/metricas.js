export function calcularFPb(tables, linhas, produtividade, valorHora) {
    let tabelas = [...tables]

    var FPb =
        entrada(tabelas) +
        saida(tabelas) +
        consulta(tabelas) +
        arquivo(tabelas) +
        interfaceOk(tabelas)

    console.log('FPb ' + FPb)

    var FPr = (FPb * 1.35).toFixed(0)
    console.log('FPr ' + FPr)

    var linhasDeCodigo = parseInt(linhas)
    console.log('Linguagem Java ' + linhasDeCodigo)

    var produtividadeSistema = parseInt(produtividade)
    console.log('Tipo de sistema ' + produtividadeSistema)

    var valorHora = parseInt(valorHora)
    console.log('Valor da hora ' + valorHora)

    var resultado = (FPr * linhasDeCodigo) / produtividadeSistema
    let [inteiro, decimal] = String(resultado).split('.')
    if (decimal) {
        resultado = parseFloat(inteiro + '.' + decimal.substring(0, 2))
    }

    console.log(resultado)

    custo(resultado, valorHora)

    prazo(resultado)
}

function entrada(tabelas) {
    //Náo utiliza tabela geral
    //delete tabelas.geral
    let primeira = 0
    let segunda = 0
    let terceira = 0

    let simples = 0
    let medio = 0
    let complexo = 0

    tabelas.forEach(tabela => {
        let valor = parseInt(tabela.value)

        if (valor >= 1 && valor <= 4) {
            primeira++
        } else if (valor >= 5 && valor <= 15) {
            segunda++
        } else if (valor >= 16) {
            terceira++
        }
    })

    if (primeira == 0 || primeira == 1) {
        simples += primeira
    } else if (primeira == 2) {
        simples += primeira
    } else if (primeira >= 3) {
        medio += primeira
    }

    if (segunda == 0 || segunda == 1) {
        simples += segunda
    } else if (segunda == 2) {
        medio += segunda
    } else if (segunda >= 3) {
        complexo += segunda
    }

    if (terceira == 0 || terceira == 1) {
        medio += terceira
    } else if (terceira == 2) {
        complexo += terceira
    } else if (terceira >= 3) {
        complexo += terceira
    }

    console.log(simples, medio, complexo)
    console.log(simples * 3, medio * 4, complexo * 6)
    return (simples * 3 + medio * 4 + complexo * 6)
}

function saida(tabelas) {
    //Utiliza tabela geral
    let { value } = tabelas.reduce((a, b) => ({ value: parseInt(a.value) + parseInt(b.value) }))
    tabelas.push({ name: 'geral', value: String(value) })

    let primeira = 0
    let segunda = 0
    let terceira = 0

    let simples = 0
    let medio = 0
    let complexo = 0

    tabelas.forEach(tabela => {
        let valor = parseInt(tabela.value)

        if (valor >= 1 && valor <= 5) {
            primeira++
        } else if (valor >= 6 && valor <= 19) {
            segunda++
        } else if (valor >= 20) {
            terceira++
        }
    })

    if (primeira == 0 || primeira == 1) {
        simples += primeira
    } else if (primeira == 2 || primeira == 3) {
        simples += primeira
    } else if (primeira >= 4) {
        medio += primeira
    }

    if (segunda == 0 || segunda == 1) {
        simples += segunda
    } else if (segunda == 2 || segunda == 3) {
        medio += segunda
    } else if (segunda >= 4) {
        complexo += segunda
    }

    if (terceira == 0 || terceira == 1) {
        medio += terceira
    } else if (terceira == 2 || terceira == 3) {
        complexo += terceira
    } else if (terceira >= 4) {
        complexo += terceira
    }

    tabelas.pop()

    console.log(simples, medio, complexo)
    console.log(simples * 4, medio * 5, complexo * 7)
    return (simples * 4 + medio * 5 + complexo * 7)
}

function consulta(tabelas) {
    //Utiliza tabela geral
    let { value } = tabelas.reduce((a, b) => ({ value: parseInt(a.value) + parseInt(b.value) }))
    tabelas.push({ name: 'geral', value: String(value) })


    let primeira = 0
    let segunda = 0
    let terceira = 0

    let simples = 0
    let medio = 0
    let complexo = 0

    tabelas.forEach(tabela => {
        let valor = parseInt(tabela.value)

        if (valor >= 1 && valor <= 4) {
            primeira++
        } else if (valor >= 5 && valor <= 15) {
            segunda++
        } else if (valor >= 16) {
            terceira++
        }
    })

    if (primeira == 0 || primeira == 1) {
        simples += primeira
    } else if (primeira == 2) {
        simples += primeira
    } else if (primeira >= 3) {
        medio += primeira
    }

    if (segunda == 0 || segunda == 1) {
        simples += segunda
    } else if (segunda == 2) {
        medio += segunda
    } else if (segunda >= 3) {
        complexo += segunda
    }

    if (terceira == 0 || terceira == 1) {
        medio += terceira
    } else if (terceira == 2) {
        complexo += terceira
    } else if (terceira >= 3) {
        complexo += terceira
    }

    tabelas.pop()

    console.log(simples, medio, complexo)
    console.log(simples * 3, medio * 4, complexo * 6)
    return (simples * 3 + medio * 4 + complexo * 6)
}

function arquivo(tabelas) {
    //Náo utiliza tabela geral

    let primeira = 0
    let segunda = 0
    let terceira = 0

    let simples = 0
    let medio = 0
    let complexo = 0

    tabelas.forEach(tabela => {
        let valor = parseInt(tabela.value)

        if (valor >= 1 && valor <= 19) {
            primeira++
        } else if (valor >= 20 && valor <= 50) {
            segunda++
        } else if (valor >= 51) {
            terceira++
        }
    })

    if (primeira == 1) {
        simples += primeira
    } else if (primeira >= 2 && primeira <= 5) {
        simples += primeira
    } else if (primeira >= 6) {
        medio += primeira
    }

    if (segunda == 1) {
        simples += segunda
    } else if (segunda >= 2 && segunda <= 5) {
        medio += segunda
    } else if (segunda >= 6) {
        complexo += segunda
    }

    if (terceira == 1) {
        medio += terceira
    } else if (terceira >= 2 && terceira <= 5) {
        complexo += terceira
    } else if (terceira >= 6) {
        complexo += terceira
    }

    console.log(simples, medio, complexo)
    console.log(simples * 7, medio * 10, complexo * 15)
    return (simples * 7 + medio * 10 + complexo * 15)
}

function interfaceOk(tabelas) {
    //Utiliza tabela geral
    let { value } = tabelas.reduce((a, b) => ({ value: parseInt(a.value) + parseInt(b.value) }))
    tabelas.push({ name: 'geral', value: String(value) })


    let primeira = 0
    let segunda = 0
    let terceira = 0

    let simples = 0
    let medio = 0
    let complexo = 0

    tabelas.forEach(tabela => {
        let valor = parseInt(tabela.value)

        if (valor >= 1 && valor <= 19) {
            primeira++
        } else if (valor >= 20 && valor <= 50) {
            segunda++
        } else if (valor >= 51) {
            terceira++
        }
    })

    if (primeira == 1) {
        simples += primeira
    } else if (primeira >= 2 && primeira <= 5) {
        simples += primeira
    } else if (primeira >= 6) {
        medio += primeira
    }

    if (segunda == 1) {
        simples += segunda
    } else if (segunda >= 2 && segunda <= 5) {
        medio += segunda
    } else if (segunda >= 6) {
        complexo += segunda
    }

    if (terceira == 1) {
        medio += terceira
    } else if (terceira >= 2 && terceira <= 5) {
        complexo += terceira
    } else if (terceira >= 6) {
        complexo += terceira
    }

    tabelas.pop()

    console.log(simples, medio, complexo)
    console.log(simples * 5, medio * 7, complexo * 10)
    return (simples * 5 + medio * 7 + complexo * 10)
}

function custo(resultado, valorHora) {
    var custo = resultado * 22 * 6 * valorHora
    console.log(custo.toFixed(2))
}

function prazo(resultado) {
    var prazoMeses = 0
    var prazoDias = 0
    var prazoHoras = 0
    var prazoMinutos = 0

    let [meses, dias] = String(resultado).split('.')
    prazoMeses = parseInt(meses)
    if (dias) {
        prazoDias = 22 * parseFloat('0.' + dias.substring(0, 2))
        let horas = String(prazoDias).split('.')[1]
        if (horas) {
            prazoHoras = 6 * parseFloat('0.' + horas.substring(0, 2))
            let minutos = String(prazoHoras).split('.')[1]
            if (minutos) {
                prazoMinutos = 60 * parseFloat('0.' + minutos.substring(0, 2))
            }
        }
    }

    console.log(String(prazoMeses).split('.')[0] + " meses")
    console.log(String(prazoDias).split('.')[0] + " dias")
    console.log(String(prazoHoras).split('.')[0] + " horas")
    console.log(String(prazoMinutos).split('.')[0] + " minutos")
}