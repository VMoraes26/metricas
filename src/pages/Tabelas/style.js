import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    rowTable: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 2,
        justifyContent: 'space-between'
    },
    headerTabela: {
        width: '45%',
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold'
    },
    headerCampos: {
        width: '40%',
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold'
    },
    headerActions: {
        width: '15%',
    },
    btnExcluir: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '15%',
        backgroundColor: '#FF0000',
        borderRadius: 2,
        height: 40,
    },
    btnAdd: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '15%',
        backgroundColor: '#32CD32',
        borderRadius: 2,
        height: 40,
    },
    btnExcluirText: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    btnAddText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 22
    },
    inputTabela: {
        height: 40,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        color: '#444',
        width: '45%',
        padding: 5,
        fontSize: 18,
    },
    inputQtd: {
        height: 40,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        color: '#444',
        width: '38%',
        padding: 5,
        fontSize: 18,
    },
    btnCalcular: {
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#FF8C00',
        borderRadius: 2,
        height: 40,
    },
    btnCalcularText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18
    },
    picker: {
        marginTop: 2,
        height: 40,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        width: '60%',
        justifyContent: 'center',
    },
    pickerItem: {
        color: '#444',
        fontSize: 12,
        fontWeight: 'bold',
        padding: 5,
    },
    textLeft: {
        display: 'flex',
        width: '38%',
        fontSize: 14,
        fontWeight: 'bold',
        height: 40,
        lineHeight: 40,
        alignContent: 'center',
        justifyContent: 'center',
        paddingLeft: 2,
    },
    valorHoraInput: {
        height: 40,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        color: '#444',
        width: '60%',
        padding: 5,
        fontSize: 18,
    },
});
