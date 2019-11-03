import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BigNumber from 'bignumber.js';

export default function Resultados() {
    const { FPb, FPr, custo, prazo, prazoMeses, prazoDias, prazoHoras, prazoMinutos, resultados, valorHora, linguagem, sistema } = useSelector(state => state)

    return (
        <KeyboardAwareScrollView>
            <View style={styles.container} >
                <View style={styles.box}>
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
                        <Text style={{ ...styles.tcol, ...styles.colOcorrencias }} />
                        <Text style={{ ...styles.tcol, ...styles.colComplexidade }}>Total de FP'b</Text>
                        <Text style={{ ...styles.tcol, ...styles.colPeso }}>{FPb}</Text>
                        <Text style={{ ...styles.tcol, ...styles.colResultado }} />
                    </View>
                </View>

                <View style={styles.box}>
                    <Text style={styles.title}>Cálculo FP'r</Text>
                    <View style={styles.tabela}>
                        <Text style={styles.tabelaTitle}>0,65 + (0,01 x NI) = FA</Text>
                        <View style={styles.trow}>
                            <Text style={{ ...styles.tcol, ...styles.colbrutoPorFA }}>FP'b x FA</Text>
                            <Text style={{ ...styles.tcol, ...styles.colFPr }}>FP'r</Text>
                        </View>
                        <View style={styles.trow}>
                            <Text style={{ ...styles.tcol, ...styles.colbrutoPorFA }}>{FPb} x 1,35</Text>
                            <Text style={{ ...styles.tcol, ...styles.colFPr }}>{FPr}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.box}>
                    <Text style={styles.title}>Prazo e Custo</Text>
                    <View style={styles.tabela}>
                        <Text style={styles.tabelaTitle}>Prazo</Text>
                        <View style={styles.trow}>
                            <Text style={{ ...styles.tcol, ...styles.colCalcPrazo }}>(FP'r x linguagem) / sistema</Text>
                            <Text style={{ ...styles.tcol, ...styles.colPrazo }}>Prazo</Text>
                        </View>
                        <View style={styles.trow}>
                            <Text style={{ ...styles.tcol, ...styles.colCalcPrazo }}>{FPr} x {linguagem.value} / {sistema.value}</Text>
                            <Text style={{ ...styles.tcol, ...styles.colPrazo }}>{prazo}</Text>
                        </View>
                    </View>

                    <View style={styles.tabela}>
                        <Text style={styles.tabelaTitle}>Prazo detalhado</Text>
                        <View style={styles.trow}>
                            <Text style={{ ...styles.tcol, ...styles.colCalcPrazoTotal }}>Meses</Text>
                            <Text style={{ ...styles.tcol, ...styles.colPrazoTotal }}>Resultado</Text>
                        </View>
                        <View style={styles.trow}>
                            <Text style={{ ...styles.tcol, ...styles.colCalcPrazoTotal }}>{prazo}</Text>
                            <Text style={{ ...styles.tcol, ...styles.colPrazoTotal }}>{String(prazoMeses).split('.')[0]}{parseInt(String(prazoMeses).split('.')[0]) != 1 ? ` Meses` : ` Mês`}</Text>
                        </View>
                        <View style={styles.trow}>
                            <Text style={{ ...styles.tcol, ...styles.colCalcPrazoTotal }}>Dias</Text>
                            <Text style={{ ...styles.tcol, ...styles.colPrazoTotal }}>Resultado</Text>
                        </View>
                        <View style={styles.trow}>
                            <Text style={{ ...styles.tcol, ...styles.colCalcPrazoTotal }}>22 x {prazoMeses && prazoMeses != '0' ? '0,' + String(prazoMeses).split('.')[1] : '0'} = {prazoDias}</Text>
                            <Text style={{ ...styles.tcol, ...styles.colPrazoTotal }}>{String(prazoDias).split('.')[0]}{parseInt(String(prazoDias).split('.')[0]) != 1 ? ` Dias` : ` Dia`}</Text>
                        </View>
                        <View style={styles.trow}>
                            <Text style={{ ...styles.tcol, ...styles.colCalcPrazoTotal }}>Horas</Text>
                            <Text style={{ ...styles.tcol, ...styles.colPrazoTotal }}>Resultado</Text>
                        </View>
                        <View style={styles.trow}>
                            <Text style={{ ...styles.tcol, ...styles.colCalcPrazoTotal }}>6 x {prazoDias && prazoDias != '0' ? '0,' + String(prazoDias).split('.')[1] : '0'} = {prazoHoras}</Text>
                            <Text style={{ ...styles.tcol, ...styles.colPrazoTotal }}>{String(prazoHoras).split('.')[0]}{parseInt(String(prazoHoras).split('.')[0]) != 1 ? ` Horas` : ` Hora`}</Text>
                        </View>
                        <View style={styles.trow}>
                            <Text style={{ ...styles.tcol, ...styles.colCalcPrazoTotal }}>Minutos</Text>
                            <Text style={{ ...styles.tcol, ...styles.colPrazoTotal }}>Resultado</Text>
                        </View>
                        <View style={styles.trow}>
                            <Text style={{ ...styles.tcol, ...styles.colCalcPrazoTotal }}>60 x {prazoHoras && prazoHoras != '0' ? '0,' + String(prazoHoras).split('.')[1] : '0'} = {prazoMinutos}</Text>
                            <Text style={{ ...styles.tcol, ...styles.colPrazoTotal }}>{String(prazoMinutos).split('.')[0]}{parseInt(String(prazoMinutos).split('.')[0]) != 1 ? ` Minutos` : ` Minuto`}</Text>
                        </View>
                    </View>
                    <View style={styles.tabela}>
                        <Text style={styles.tabelaTitle}>Custo</Text>
                        <View style={styles.trow}>
                            <Text style={{ ...styles.tcol, ...styles.colCalcCusto }}>Prazo x dias x horas x valor hora</Text>
                            <Text style={{ ...styles.tcol, ...styles.colCusto }}>Custo</Text>
                        </View>
                        <View style={styles.trow}>
                            <Text style={{ ...styles.tcol, ...styles.colCalcCusto }}>{prazo} x 22 x 6 x {valorHora}</Text>
                            <Text style={{ ...styles.tcol, ...styles.colCusto }}>R$ {String(custo).split('.')[1] ? String(custo).replace('.', ',') : `${custo},00`}</Text>
                        </View>
                    </View>
                </View>

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