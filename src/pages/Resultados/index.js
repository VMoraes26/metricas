import React from 'react';
import { useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './style';

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