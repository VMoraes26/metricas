import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default function App() {
  const [tabelas, setTabelas] = useState({})
  const [tabelaNome, setTabelaNome] = useState('')
  const [tabelaQtdCampos, setTabelaQtdCampos] = useState('')
  const [conteudo, setConteudo] = useState([])

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
            style={{ width: '20%', alignItems: 'center' }}
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
    delete tables[table]
    setTabelas({ ...tables })
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      {conteudo}
      <View style={styles.rowTable}>

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '40%' }}
          placeholder="Nome da tabela"
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
          style={{ width: '20%', alignItems: 'center' }}
          onPress={addTable}
        >
          <Text>+</Text>
        </TouchableOpacity>

      </View>

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
