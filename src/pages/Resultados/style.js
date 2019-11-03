import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    title: {
        display: 'flex',
        fontSize: 16,
        fontWeight: 'bold',
        height: 40,
        lineHeight: 40,
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    box: {
        width: '100%',
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 2,
        marginBottom: 10
    },
    tabela: {
        width: '100%',
        marginBottom: 5,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#ddd',
    },
    tabelaTitle: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    trow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 2,
        borderColor: '#ddd',
    },
    tcol: {
        display: 'flex',
        fontSize: 14,
        height: 30,
        lineHeight: 30,
        textAlign: 'center',
        justifyContent: 'center',
    },
    colOcorrencias: {
        width: '30%',
        borderRightWidth: 2,
        borderColor: '#ddd',
    },
    colComplexidade: {
        width: '30%',
        borderRightWidth: 2,
        borderColor: '#ddd',
    },
    colPeso: {
        width: '15%',
        borderRightWidth: 2,
        borderColor: '#ddd',
    },
    colResultado: {
        width: '25%'
    },
    colbrutoPorFA: {
        width: '50%',
        borderRightWidth: 2,
        borderColor: '#ddd',
    },
    colFPr: {
        width: '50%',
    },
    colCalcCusto: {
        width: '65%',
        borderRightWidth: 2,
        borderColor: '#ddd',
    },
    colCusto: {
        width: '35%',
    },
    colCalcPrazo: {
        width: '65%',
        borderRightWidth: 2,
        borderColor: '#ddd',
    },
    colPrazo: {
        width: '35%',
    },
    colCalcPrazoTotal: {
        width: '65%',
        borderRightWidth: 2,
        borderColor: '#ddd',
    },
    colPrazoTotal: {
        width: '35%',
    },
})