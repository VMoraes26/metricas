import BigNumber from 'bignumber.js'

export function calcularFPb(tables, linhas, produtividade, valorHora, dispatch) {
    let tabelas = [...tables]

    var FPb = (
        entrada(tabelas) +
        saida(tabelas) +
        consulta(tabelas) +
        arquivo(tabelas) +
        interfaceOk(tabelas)
    )

    var FPr = (FPb * 1.35).toFixed(0)

    dispatch({ type: 'FPB', value: FPb })

    dispatch({ type: 'FPR', value: FPr })

    var linhasDeCodigo = parseInt(linhas)
    var produtividadeSistema = parseInt(produtividade)
    var valorHora = parseInt(valorHora)

    var prazo = calcularPrazo(FPr, linhasDeCodigo, produtividadeSistema)

    dispatch({ type: 'PRAZO', value: prazo })

    dispatch({ type: 'CUSTO', value: calcularCusto(prazo, valorHora) })

    dispatch({ type: 'PRAZOS', value: prazoTotal(prazo) })
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

    let total = (simples * 3 + medio * 4 + complexo * 6)
    return total
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

    let total = (simples * 4 + medio * 5 + complexo * 7)
    return total
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

    let total = (simples * 3 + medio * 4 + complexo * 6)
    return total
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

    let total = (simples * 7 + medio * 10 + complexo * 15)
    return total
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

    let total = (simples * 5 + medio * 7 + complexo * 10)
    return total
}

function calcularPrazo(FPr, linhasDeCodigo, produtividadeSistema) {
    var resultado = divide(multiply([FPr, linhasDeCodigo]), produtividadeSistema)
    resultado = cases(resultado, 2)
    return resultado
}

function calcularCusto(resultado, valorHora) {
    var custo = multiply([resultado , 22,6 , valorHora])
    return parseFloat(custo.toFixed(2))
}

function prazoTotal(resultado) {
    var prazoMeses = 0
    var prazoDias = 0
    var prazoHoras = 0
    var prazoMinutos = 0

    let [meses, dias] = String(resultado).split('.')
    prazoMeses = BigNumber(meses)
    if (dias) {
        prazoDias = multiply([22 , BigNumber('0.' + dias)])
        prazoDias = cases(prazoDias,2)
        let horas = String(prazoDias).split('.')[1]
        if (horas) {
            prazoHoras = multiply([6, BigNumber('0.' + horas)])
        prazoHoras = cases(prazoHoras,2)
            let minutos = String(prazoHoras).split('.')[1]
            if (minutos) {
                prazoMinutos = (60 * BigNumber('0.' + minutos))
            }
        }
    }
    prazoMeses = String(prazoMeses).split('.')[0]
    prazoDias = String(prazoDias).split('.')[0]
    prazoHoras = String(prazoHoras).split('.')[0]
    prazoMinutos = String(prazoMinutos).split('.')[0]
    return { prazoMeses, prazoDias, prazoHoras, prazoMinutos }
}

function multiply(numbers) {
    let result = 1
    numbers.forEach(number => {
        result = BigNumber(result).times(number).toNumber()
    });
    return result
}

function divide(a, b) {
    return BigNumber(a).dividedBy(b).toNumber()
}

function cases(number, decimalPlaces) {
    let [integer, decimal] = BigNumber(number).toString().split('.')
    let result = integer
    if (decimal) {
        result += '.' + decimal.substring(0, decimalPlaces)
    }
    return BigNumber(result).toNumber()
}