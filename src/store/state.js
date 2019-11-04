const resultados = [
    {
        tabela: 'Entradas',
        simples: {
            ocorrencias: '0',
            complexidade: 'simples',
            peso: '3',
            resultado: '0'
        },
        medio: {
            ocorrencias: '0',
            complexidade: 'médio',
            peso: '4',
            resultado: '0'
        },
        complexo: {
            ocorrencias: '0',
            complexidade: 'complexo',
            peso: '6',
            resultado: '0'
        }
    },
    {
        tabela: 'Saídas',
        simples: {
            ocorrencias: '0',
            complexidade: 'simples',
            peso: '4',
            resultado: '0'
        },
        medio: {
            ocorrencias: '0',
            complexidade: 'médio',
            peso: '5',
            resultado: '0'
        },
        complexo: {
            ocorrencias: '0',
            complexidade: 'complexo',
            peso: '7',
            resultado: '0'
        }
    },
    {
        tabela: 'Consultas',
        simples: {
            ocorrencias: '0',
            complexidade: 'simples',
            peso: '3',
            resultado: '0'
        },
        medio: {
            ocorrencias: '0',
            complexidade: 'médio',
            peso: '4',
            resultado: '0'
        },
        complexo: {
            ocorrencias: '0',
            complexidade: 'complexo',
            peso: '6',
            resultado: '0'
        }
    },
    {
        tabela: 'Arquivos',
        simples: {
            ocorrencias: '0',
            complexidade: 'simples',
            peso: '7',
            resultado: '0'
        },
        medio: {
            ocorrencias: '0',
            complexidade: 'médio',
            peso: '10',
            resultado: '0'
        },
        complexo: {
            ocorrencias: '0',
            complexidade: 'complexo',
            peso: '15',
            resultado: '0'
        }
    },
    {
        tabela: 'Interfaces',
        simples: {
            ocorrencias: '0',
            complexidade: 'simples',
            peso: '5',
            resultado: '0'
        },
        medio: {
            ocorrencias: '0',
            complexidade: 'médio',
            peso: '7',
            resultado: '0'
        },
        complexo: {
            ocorrencias: '0',
            complexidade: 'complexo',
            peso: '10',
            resultado: '0'
        }
    },
]

const INITIAL_STATE = {
    sistemas: [
        {
            id: 0,
            name: 'Selecione',
            value: '0'
        },
        {
            id: 1,
            name: 'Comercial',
            value: '2500'
        },
        {
            id: 2,
            name: 'Comércio eletrônico',
            value: '3600'
        },
        {
            id: 3,
            name: 'Web',
            value: '3300'
        }
    ],
    linguagens: [
        {
            id: 0,
            name: 'Selecione',
            value: '0'
        },
        {
            id: 1,
            name: 'JAVA',
            value: '20'
        },
        {
            id: 2,
            name: 'SQL',
            value: '15'
        },
    ],
    FPb: '0',
    FPr: '0',
    custo: '0',
    prazo: '0',
    prazoMeses: '0',
    prazoDias: '0',
    prazoHoras: '0',
    prazoMinutos: '0',
    sistema: { id: 3, name: '', value: '3300' },
    linguagem: { id: 1, name: '', value: '20' },
    valorHora: '25',
    resultados: resultados
}

export default function metricas(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTIONS.SISTEMA:
            return { ...state, sistema: action.value }
        case ACTIONS.LINGUAGEM:
            return { ...state, linguagem: action.value }
        case ACTIONS.VALORHORA:
            return { ...state, valorHora: action.value }
        case ACTIONS.RESULTADOS:
            return { ...state, resultados: action.value }
        case ACTIONS.FPB:
            return { ...state, FPb: action.value }
        case ACTIONS.FPR:
            return { ...state, FPr: action.value }
        case ACTIONS.CUSTO:
            return { ...state, custo: action.value }
        case ACTIONS.PRAZO:
            return { ...state, prazo: action.value }
        case ACTIONS.PRAZOS:
            return { ...state, ...action.value }
        case ACTIONS.ADDSISTEMA:
            return { ...state, sistemas: [...state.sistemas, { ...action.value }] }
        case ACTIONS.UPDATESISTEMA:
            let sisToUpdate = JSON.parse(JSON.stringify(state.sistemas));
            sisToUpdate.forEach((sistema, key) => {
                if (sistema.id === action.value.id) {
                    sisToUpdate[key] = action.value
                }
            })
            return { ...state, sistemas: sisToUpdate }
        case ACTIONS.DELETESISTEMA:
            let sisToDel = JSON.parse(JSON.stringify(state.sistemas));
            sisToDel.forEach((sistema, key) => {
                if (sistema.id === action.value.id) {
                    sisToDel.splice(key, 1)
                }
            })
            return { ...state, sistemas: sisToDel }

        case ACTIONS.ADDLINGUAGEM:
            return { ...state, linguagens: [...state.linguagens, { ...action.value }] }
        case ACTIONS.UPDATELINGUAGEM:
            let lingToUpdate = JSON.parse(JSON.stringify(state.linguagens));
            lingToUpdate.forEach((linguagem, key) => {
                if (linguagem.id === action.value.id) {
                    lingToUpdate[key] = action.value
                }
            })
            return { ...state, linguagens: lingToUpdate }
        case ACTIONS.DELETELINGUAGEM:
            let lingToDel = JSON.parse(JSON.stringify(state.linguagens));
            lingToDel.forEach((linguagem, key) => {
                if (linguagem.id === action.value.id) {
                    lingToDel.splice(key, 1)
                }
            })
            return { ...state, linguagens: lingToDel }
        default:
            return state
    }
}

const ACTIONS = {
    SISTEMA: 'SISTEMA',
    LINGUAGEM: 'LINGUAGEM',
    VALORHORA: 'VALORHORA',
    RESULTADOS: 'RESULTADOS',
    FPB: 'FPB',
    FPR: 'FPR',
    CUSTO: 'CUSTO',
    PRAZO: 'PRAZO',
    PRAZOS: 'PRAZOS',
    ADDSISTEMA: 'ADDSISTEMA',
    UPDATESISTEMA: 'UPDATESISTEMA',
    DELETESISTEMA: 'DELETESISTEMA',
    ADDLINGUAGEM: 'ADDLINGUAGEM',
    UPDATELINGUAGEM: 'UPDATELINGUAGEM',
    DELETELINGUAGEM: 'DELETELINGUAGEM',
}