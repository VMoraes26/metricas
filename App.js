import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { calcularFPb } from './metricas';

export default function App() {
  const [tabelas, setTabelas] = useState({ a: '5', b: '6', c: '12', d: '18', e: '7' })
  const [tabelaNome, setTabelaNome] = useState('')
  const [tabelaQtdCampos, setTabelaQtdCampos] = useState('')
  const [conteudo, setConteudo] = useState([])
  const [FPb, setFPb] = useState(0)
  const [linhas, setLinhas] = useState('20')
  const [produtividade, setProdutividade] = useState('2500')
  const [valorHora, setValorHora] = useState('15')

  useEffect(() => {
    renderTable()
  }, [tabelas])

  function renderTable() {
    var novoConteudo = []
    for (tabela in tabelas) {
      novoConteudo.push(
        <View
          style={styles.rowTable}
          key={tabela}
        >
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '40%' }}
            value={tabela}
            editable={false}
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '40%' }}
            value={tabelas[tabela]}
            editable={false}
          />
          <TouchableOpacity
            style={{ width: '20%', alignItems: 'center', backgroundColor: 'red', justifyContent: 'center', }}
            onPress={() => removeTable(tabela)}
          >
            <Text>X</Text>
          </TouchableOpacity>
        </View >
      )
    }
    setConteudo(novoConteudo)
  }

  function addTable() {
    if (tabelaNome && tabelaQtdCampos) {
      setTabelas({ ...tabelas, [tabelaNome]: tabelaQtdCampos })
      setTabelaNome('')
      setTabelaQtdCampos('')
    }
  }

  function removeTable(table) {
    var tables = tabelas
    console.log(table)
    delete tables[table]
    setTabelas({ ...tables })
  }

  async function calcular() {
    await setFPb(await calcularFPb(tabelas, linhas, produtividade, valorHora))
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      {conteudo}
      <View style={styles.rowTable}>

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '40%' }}
          placeholder="Nome da tabela"
          autoCompleteType="off"
          autoCorrect={false}
          value={tabelaNome}
          onChangeText={(text) => setTabelaNome(text)}
        />


        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '40%' }}
          keyboardType='numeric'
          placeholder="Qtd de campos"
          value={tabelaQtdCampos}
          onChangeText={(text) => setTabelaQtdCampos(text)}
        />

        <TouchableOpacity
          style={{ width: '20%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}
          onPress={addTable}
        >
          <Text>+</Text>
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
  }
});
