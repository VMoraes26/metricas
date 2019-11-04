import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingTop: 5,
        paddingHorizontal: 10
    },
    row: {
        width: '100%',
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        display: 'flex',
        color: '#444',
        fontWeight: 'bold',
        fontSize: 18,
        height: 40,
        lineHeight: 40,
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    picker: {
        marginTop: 2,
        height: 40,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        width: '100%',
        justifyContent: 'center',
    },
    inputName: {
        height: 40,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        color: '#444',
        width: '55%',
        padding: 5,
        fontSize: 18,
    },
    inputValue: {
        height: 40,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        color: '#444',
        width: '43%',
        padding: 5,
        fontSize: 18,
    },
    rowButton: {
        width: '100%',
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonAdd: {
        width: 100,
        backgroundColor: '#25d366',
        borderRadius: 2,
        height: 40,
        alignItems: 'center',
    },
    buttonDelete: {
        width: 100,
        backgroundColor: '#FF2E2E',
        borderRadius: 2,
        height: 40,
        alignItems: 'center',
        marginLeft: 5
    },
    buttonText: {
        display: 'flex',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
        height: 40,
        lineHeight: 40,
        alignContent: 'center',
        justifyContent: 'center',
        paddingLeft: 2,
    }
})
