import React, { useState, useEffect } from 'react';
import {useSelector}from 'react-redux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { calcularFPb } from '../../metricas';
import store from './src/store/index.js';

export default function Tabelas() {
  const [tabelas, setTabelas] = useState([{ name: 'a', value: '8' }, { name: 'b', value: '6' }, { name: 'c', value: '12' }, { name: 'd', value: '18' }, { name: 'e', value: '4' }, { name: 'f', value: '5' }])
  const [tabelaNome, setTabelaNome] = useState('')
  const [tabelaQtdCampos, setTabelaQtdCampos] = useState('')
  const [FPb, setFPb] = useState(0)
  const [linhas, setLinhas] = useState('20')
  const [produtividade, setProdutividade] = useState('3300')
  const [valorHora, setValorHora] = useState('25')

  function addTable() {
    let name = tabelaNome
    if (tabelaQtdCampos) {
      if (!tabelaNome) {
        name = `Tabela${tabelas.length + 1}`
      }
      setTabelas([...tabelas, { name, value: tabelaQtdCampos }])
      setTabelaNome('')
      setTabelaQtdCampos('')
    }
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
    setFPb(await calcularFPb(tabelas, linhas, produtividade, valorHora))
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>

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
            />
            <TextInput
              style={styles.inputQtd}
              value={tabela.value}
              onChangeText={(text) => changeTableValue(key, text)}
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
          placeholder="Nome da tabela"
          autoCompleteType="off"
          autoCorrect={false}
          value={tabelaNome}
          onChangeText={(text) => setTabelaNome(text)}
        />

        <TextInput
          style={styles.inputQtd}
          keyboardType='numeric'
          placeholder="Quantidade"
          value={tabelaQtdCampos}
          onChangeText={(text) => setTabelaQtdCampos(text)}
        />

        <TouchableOpacity
          style={styles.btnAdd}
          onPress={addTable}
        >
          <Text style={styles.btnAddText}>+</Text>
        </TouchableOpacity>

      </View>

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '40%' }}
        keyboardType='numeric'
        placeholder="Linhas de codigo por linguagem"
        value={linhas}
        onChangeText={(text) => setLinhas(text)}
      />

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '40%' }}
        keyboardType='numeric'
        placeholder="Produtividade(Kloc/Loc)"
        value={produtividade}
        onChangeText={(text) => setProdutividade(text)}
      />

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '40%' }}
        keyboardType='numeric'
        placeholder="Valor da hora"
        value={valorHora}
        onChangeText={(text) => setValorHora(text)}
      />

      <TouchableOpacity
        style={{ width: '100%', alignItems: 'center', height: 40, backgroundColor: 'orange', justifyContent: 'center' }}
        onPress={calcular}
      >
        <Text>Calcular</Text>
      </TouchableOpacity>

      <Text>{FPb}</Text>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  rowTable: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center'
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
    margin: 2,
    width: '15%',
    backgroundColor: '#FF0000',
    borderRadius: 2,
    height: 40,
  },
  btnAdd: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
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
    margin: 2,
    padding: 5,
    fontSize: 18,
  },
  inputQtd: {
    height: 40,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    color: '#444',
    width: '40%',
    margin: 2,
    padding: 5,
    fontSize: 18,
  },
});
