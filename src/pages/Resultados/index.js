import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Resultados() {
    const { FPb, FPr, custo, prazo, prazoMeses, prazoDias, prazoHoras, prazoMinutos, resultados } = useSelector(state => state)

    return (
        <KeyboardAwareScrollView>
            <View style={styles.container} >
                <View style={styles.funcoes}>
                    <Text style={styles.title}>Funções</Text>
                    {
                        resultados.map((resultado, key) =>
                            <View key={key} style={styles.tabela}>
                                <Text style={styles.tabelaTitle}>{resultado.tabela}</Text>
                                <View style={styles.trow}>
                                    <Text style={{ ...styles.tcol, ...styles.colOcorrencias }}>Ocorrências</Text>
                                    <Text style={{ ...styles.tcol, ...styles.colComplexidade }}>Complexidade</Text>
                                    <Text style={{ ...styles.tcol, ...styles.colPeso }}>Peso</Text>
                                    <Text style={{ ...styles.tcol, ...styles.colResultado }}>Resultado</Text>
                                </View>
                                <View style={styles.trow}>
                                    <Text style={{ ...styles.tcol, ...styles.colOcorrencias }}>{resultado.simples.ocorrencias}</Text>
                                    <Text style={{ ...styles.tcol, ...styles.colComplexidade }}>{resultado.simples.complexidade}</Text>
                                    <Text style={{ ...styles.tcol, ...styles.colPeso }}>{resultado.simples.peso}</Text>
                                    <Text style={{ ...styles.tcol, ...styles.colResultado }}>{resultado.simples.resultado}</Text>
                                </View>
                                <View style={styles.trow}>
                                    <Text style={{ ...styles.tcol, ...styles.colOcorrencias }}>{resultado.medio.ocorrencias}</Text>
                                    <Text style={{ ...styles.tcol, ...styles.colComplexidade }}>{resultado.medio.complexidade}</Text>
                                    <Text style={{ ...styles.tcol, ...styles.colPeso }}>{resultado.medio.peso}</Text>
                                    <Text style={{ ...styles.tcol, ...styles.colResultado }}>{resultado.medio.resultado}</Text>
                                </View>
                                <View style={styles.trow}>
                                    <Text style={{ ...styles.tcol, ...styles.colOcorrencias }}>{resultado.complexo.ocorrencias}</Text>
                                    <Text style={{ ...styles.tcol, ...styles.colComplexidade }}>{resultado.complexo.complexidade}</Text>
                                    <Text style={{ ...styles.tcol, ...styles.colPeso }}>{resultado.complexo.peso}</Text>
                                    <Text style={{ ...styles.tcol, ...styles.colResultado }}>{resultado.complexo.resultado}</Text>
                                </View>
                            </View>
                        )
                    }
                    <View style={styles.trow}>
                        <Text style={{ ...styles.tcol, ...styles.colOcorrencias }}/>
                        <Text style={{ ...styles.tcol, ...styles.colComplexidade }}>Total de FP'b</Text>
                        <Text style={{ ...styles.tcol, ...styles.colPeso }}>{FPb}</Text>
                        <Text style={{ ...styles.tcol, ...styles.colResultado }}/>
                    </View>
                </View>
                <Text>FPr {FPr}</Text>
                <Text>Custo {custo}</Text>
                <Text>Prazo {prazo}</Text>
                <Text>Prazo Meses {prazoMeses}</Text>
                <Text>Prazo Dias {prazoDias}</Text>
                <Text>Prazo Horas {prazoHoras}</Text>
                <Text>Prazo Minutos {prazoMinutos}</Text>

            </View>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
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
        paddingLeft: 5,
    },
    funcoes: {
        width: '100%',
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 2,
    },
    tabela: {
        width: '100%',
        marginBottom: 5,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#ddd',
    },
    tabelaTitle: {
        paddingLeft: 10,
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
})