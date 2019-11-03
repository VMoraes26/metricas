import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Picker } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { calcularFPb } from '../../metricas';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './style';

export default function Tabelas() {
  const dispatch = useDispatch()
  const { valorHora, sistema, sistemas, linguagem, linguagens, resultados } = useSelector(state => state)
  const [tabelas, setTabelas] = useState([{ name: 'a', value: '8' }, { name: 'b', value: '6' }, { name: 'c', value: '12' }, { name: 'd', value: '18' }, { name: 'e', value: '4' }, { name: 'f', value: '5' }])
  const [tabelaNome, setTabelaNome] = useState('')
  const [tabelaQtdCampos, setTabelaQtdCampos] = useState('')

  function addTable() {
    let name = tabelaNome
    if (tabelaQtdCampos) {
      if (!tabelaNome) {
        name = `Tabela${tabelas.length + 1}`
      }
      setTabelas([...tabelas, { name, value: tabelaQtdCampos }])
      setTabelaNome('')
      setTabelaQtdCampos('')
      return [...tabelas, { name, value: tabelaQtdCampos }]
    }
    return tabelas
  }

  function removeTable(index) {
    var tables = tabelas
    tables.splice(index, 1)
    setTabelas([...tables])
  }

  function changeTableName(index, name) {
    var tables = tabelas
    tables[index].name = name
    setTabelas([...tables])
  }

  function changeTableValue(index, value) {
    var tables = tabelas
    tables[index].value = value
    setTabelas([...tables])
  }

  async function calcular() {
    let tables = addTable()
    calcularFPb(tables, linguagem.value, sistema.value, valorHora, resultados, dispatch)
  }

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>

        < View
          style={styles.rowTable}
        >
          <Text style={styles.headerTabela}>Tabelas</Text>
          <Text style={styles.headerCampos}>Campos</Text>
          <View style={styles.headerActions}></View>
        </ View>

        {
          tabelas.map((tabela, key) =>
            < View
              style={styles.rowTable}
              key={key}
            >
              <TextInput
                style={styles.inputTabela}
                value={tabela.name}
                onChangeText={(text) => changeTableName(key, text)}
                selectTextOnFocus
              />
              <TextInput
                style={styles.inputQtd}
                value={tabela.value}
                onChangeText={(text) => changeTableValue(key, text)}
                selectTextOnFocus
              />
              <TouchableOpacity
                style={styles.btnExcluir}
                onPress={() => removeTable(key)}
              >
                <Text style={styles.btnExcluirText}>X</Text>
              </TouchableOpacity>
            </View >
          )
        }

        <View style={styles.rowTable}>

          <TextInput
            style={styles.inputTabela}
            placeholder="Tabela"
            autoCompleteType="off"
            autoCorrect={false}
            value={tabelaNome}
            onChangeText={(text) => setTabelaNome(text)}
            selectTextOnFocus
            textContentType='none'
          />

          <TextInput
            style={styles.inputQtd}
            keyboardType='numeric'
            placeholder="Quantidade"
            value={tabelaQtdCampos}
            onChangeText={(text) => setTabelaQtdCampos(text)}
            selectTextOnFocus
          />

          <TouchableOpacity
            style={styles.btnAdd}
            onPress={addTable}
          >
            <Text style={styles.btnAddText}>+</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.rowTable}>
          <Text style={styles.textLeft}>Linguagem</Text>
          <View style={styles.picker} >
            <Picker
              selectedValue={linguagem.id}
              onValueChange={(itemValue, itemIndex) => dispatch({ type: 'LINGUAGEM', value: linguagens[itemIndex] })}
            >
              {linguagens.map((item, key) => <Picker.Item color='#444' key={key} label={item.id ? `${item.name} -> ${item.value} LOC por FP` : item.name} value={item.id} />)}
            </Picker>
          </View>
        </View>

        <View style={styles.rowTable}>
          <Text style={styles.textLeft}>Sistema</Text>
          <View style={styles.picker}>
            <Picker
              selectedValue={sistema.id}
              onValueChange={(itemValue, itemIndex) => dispatch({ type: 'SISTEMA', value: sistemas[itemIndex] })}
            >
              {sistemas.map((item, key) => <Picker.Item color='#444' key={key} label={item.id ? `${item.name} -> ${item.value} LOC` : item.name} value={item.id} />)}
            </Picker>
          </View>
        </View>

        <View style={styles.rowTable}>
          <Text style={styles.textLeft}>Valor da hora (R$)</Text>
          <TextInput
            style={styles.valorHoraInput}
            keyboardType='numeric'
            placeholder="Valor da hora"
            value={valorHora}
            onChangeText={(text) => dispatch({ type: 'VALORHORA', value: text })}
            selectTextOnFocus
          />
        </View>

        <TouchableOpacity
          style={styles.btnCalcular}
          onPress={calcular}
        >
          <Text style={styles.btnCalcularText}>Calcular</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAwareScrollView>
  );
}

