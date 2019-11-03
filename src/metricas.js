import BigNumber from 'bignumber.js'

export function calcularFPb(tables, linhas, produtividade, valorHora, results, dispatch) {
    let tabelas = JSON.parse(JSON.stringify(tables));
    let resultados = JSON.parse(JSON.stringify(results));

    var FPb = (
        entrada(tabelas, resultados) +
        saida(tabelas, resultados) +
        consulta(tabelas, resultados) +
        arquivo(tabelas, resultados) +
        interfaceOk(tabelas, resultados)
    )

    var FPr = multiply([FPb, 1.35]).toFixed(0)

    dispatch({ type: 'RESULTADOS', value: resultados })

    dispatch({ type: 'FPB', value: FPb })

    dispatch({ type: 'FPR', value: FPr })

    var linhasDeCodigo = BigNumber(linhas)
    var produtividadeSistema = BigNumber(produtividade)
    var valorHora = BigNumber(valorHora)

    var prazo = calcularPrazo(FPr, linhasDeCodigo, produtividadeSistema)

    dispatch({ type: 'PRAZO', value: prazo })

    dispatch({ type: 'CUSTO', value: calcularCusto(prazo, valorHora) })

    dispatch({ type: 'PRAZOS', value: prazoTotal(prazo) })
}

function entrada(tabelas, resultados) {
    //Náo utiliza tabela geral

    let primeira = 0
    let segunda = 0
    let terceira = 0

    let simples = 0
    let medio = 0
    let complexo = 0

    tabelas.forEach(tabela => {
        let valor = BigNumber(tabela.value)

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

    let index = 0
    resultados.forEach((resultado, key) => {
        if (resultado.tabela === 'Entradas') {
            index = key
        }
    });

    let simplesResultado = simples * BigNumber(resultados[index].simples.peso).toNumber()
    let medioResultado = medio * BigNumber(resultados[index].medio.peso).toNumber()
    let complexoResultado = complexo * BigNumber(resultados[index].complexo.peso).toNumber()

    resultados[index].simples.ocorrencias = simples
    resultados[index].medio.ocorrencias = medio
    resultados[index].complexo.ocorrencias = complexo
    resultados[index].simples.resultado = simplesResultado
    resultados[index].medio.resultado = medioResultado
    resultados[index].complexo.resultado = complexoResultado

    let total = (simplesResultado + medioResultado + complexoResultado)
    return total
}

function saida(tabelas, resultados) {
    //Utiliza tabela geral
    let { value } = tabelas.reduce((a, b) => ({ value: BigNumber(a.value) + BigNumber(b.value) }))
    tabelas.push({ name: 'geral', value: String(value) })

    let primeira = 0
    let segunda = 0
    let terceira = 0

    let simples = 0
    let medio = 0
    let complexo = 0

    tabelas.forEach(tabela => {
        let valor = BigNumber(tabela.value)

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

    let index = 0
    resultados.forEach((resultado, key) => {
        if (resultado.tabela === 'Saídas') {
            index = key
        }
    });

    let simplesResultado = simples * BigNumber(resultados[index].simples.peso).toNumber()
    let medioResultado = medio * BigNumber(resultados[index].medio.peso).toNumber()
    let complexoResultado = complexo * BigNumber(resultados[index].complexo.peso).toNumber()

    resultados[index].simples.ocorrencias = simples
    resultados[index].medio.ocorrencias = medio
    resultados[index].complexo.ocorrencias = complexo
    resultados[index].simples.resultado = simplesResultado
    resultados[index].medio.resultado = medioResultado
    resultados[index].complexo.resultado = complexoResultado

    let total = (simplesResultado + medioResultado + complexoResultado)
    return total
}

function consulta(tabelas, resultados) {
    //Utiliza tabela geral
    let { value } = tabelas.reduce((a, b) => ({ value: BigNumber(a.value) + BigNumber(b.value) }))
    tabelas.push({ name: 'geral', value: String(value) })


    let primeira = 0
    let segunda = 0
    let terceira = 0

    let simples = 0
    let medio = 0
    let complexo = 0

    tabelas.forEach(tabela => {
        let valor = BigNumber(tabela.value)

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

    let index = 0
    resultados.forEach((resultado, key) => {
        if (resultado.tabela === 'Consultas') {
            index = key
        }
    });

    let simplesResultado = simples * BigNumber(resultados[index].simples.peso).toNumber()
    let medioResultado = medio * BigNumber(resultados[index].medio.peso).toNumber()
    let complexoResultado = complexo * BigNumber(resultados[index].complexo.peso).toNumber()

    resultados[index].simples.ocorrencias = simples
    resultados[index].medio.ocorrencias = medio
    resultados[index].complexo.ocorrencias = complexo
    resultados[index].simples.resultado = simplesResultado
    resultados[index].medio.resultado = medioResultado
    resultados[index].complexo.resultado = complexoResultado

    let total = (simplesResultado + medioResultado + complexoResultado)
    return total
}

function arquivo(tabelas, resultados) {
    //Náo utiliza tabela geral

    let primeira = 0
    let segunda = 0
    let terceira = 0

    let simples = 0
    let medio = 0
    let complexo = 0

    tabelas.forEach(tabela => {
        let valor = BigNumber(tabela.value)

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

    let index = 0
    resultados.forEach((resultado, key) => {
        if (resultado.tabela === 'Arquivos') {
            index = key
        }
    });

    let simplesResultado = simples * BigNumber(resultados[index].simples.peso).toNumber()
    let medioResultado = medio * BigNumber(resultados[index].medio.peso).toNumber()
    let complexoResultado = complexo * BigNumber(resultados[index].complexo.peso).toNumber()

    resultados[index].simples.ocorrencias = simples
    resultados[index].medio.ocorrencias = medio
    resultados[index].complexo.ocorrencias = complexo
    resultados[index].simples.resultado = simplesResultado
    resultados[index].medio.resultado = medioResultado
    resultados[index].complexo.resultado = complexoResultado

    let total = (simplesResultado + medioResultado + complexoResultado)
    return total
}

function interfaceOk(tabelas, resultados) {
    //Utiliza tabela geral
    let { value } = tabelas.reduce((a, b) => ({ value: BigNumber(a.value) + BigNumber(b.value) }))
    tabelas.push({ name: 'geral', value: String(value) })


    let primeira = 0
    let segunda = 0
    let terceira = 0

    let simples = 0
    let medio = 0
    let complexo = 0

    tabelas.forEach(tabela => {
        let valor = BigNumber(tabela.value)

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

    let index = 0
    resultados.forEach((resultado, key) => {
        if (resultado.tabela === 'Interfaces') {
            index = key
        }
    });

    let simplesResultado = simples * BigNumber(resultados[index].simples.peso).toNumber()
    let medioResultado = medio * BigNumber(resultados[index].medio.peso).toNumber()
    let complexoResultado = complexo * BigNumber(resultados[index].complexo.peso).toNumber()

    resultados[index].simples.ocorrencias = simples
    resultados[index].medio.ocorrencias = medio
    resultados[index].complexo.ocorrencias = complexo
    resultados[index].simples.resultado = simplesResultado
    resultados[index].medio.resultado = medioResultado
    resultados[index].complexo.resultado = complexoResultado

    let total = (simplesResultado + medioResultado + complexoResultado)
    return total
}

function calcularPrazo(FPr, linhasDeCodigo, produtividadeSistema) {
    var prazo = divide(multiply([FPr, linhasDeCodigo]), produtividadeSistema)
    prazo = cases(prazo, 2)
    return prazo
}

function calcularCusto(prazo, valorHora) {
    var custo = multiply([prazo, 22, 6, valorHora])
    return BigNumber(custo.toFixed(2)).toNumber()
}

function prazoTotal(prazo) {
    var prazoMeses = 0
    var prazoDias = 0
    var prazoHoras = 0
    var prazoMinutos = 0

    let [meses, dias] = String(prazo).split('.')
    prazoMeses = BigNumber(meses)
    if (dias) {
        prazoDias = multiply([22, BigNumber('0.' + dias)])
        prazoDias = cases(prazoDias, 2)
        let horas = String(prazoDias).split('.')[1]
        if (horas) {
            prazoHoras = multiply([6, BigNumber('0.' + horas)])
            prazoHoras = cases(prazoHoras, 2)
            let minutos = String(prazoHoras).split('.')[1]
            if (minutos) {
                prazoMinutos = (60 * BigNumber('0.' + minutos))
            }
        }
    }
    prazoMeses = BigNumber(String(prazoMeses).split('.')[0]).toNumber()
    prazoDias = BigNumber(String(prazoDias).split('.')[0]).toNumber()
    prazoHoras = BigNumber(String(prazoHoras).split('.')[0]).toNumber()
    prazoMinutos = BigNumber(String(prazoMinutos).split('.')[0]).toNumber()
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