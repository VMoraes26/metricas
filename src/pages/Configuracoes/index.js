import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Picker } from 'react-native';

export default function Configuracoes() {
  const dispatch = useDispatch()
  const { sistemas, linguagens } = useSelector(state => state)
  const [sistema, setSistema] = useState({ id: 0, name: '', value: '' })
  const [linguagem, setLinguagem] = useState({ id: 0, name: '', value: '' })
  const [sistemaSelected, setSistemaSelected] = useState(sistemas[0])
  const [linguagemSelected, setLinguagemSelected] = useState(linguagens[0])

  function onChangeSistemas(temValue, itemIndex) {
    setSistemaSelected(sistemas[itemIndex])
    if (sistemas[itemIndex].id !== 0) {
      setSistema(sistemas[itemIndex])
    } else {
      setSistema({ id: 0, name: '', value: '' })
    }
  }

  function addSistema() {
    if (sistema.name && sistema.value) {
      if (sistema.id) {
        sistemas.forEach((sis, key) => {
          if (sis.id === sistema.id) {
            dispatch({ type: 'SISTEMAS', value: [...sistemas, sistemas[key] = { ...sistema }] })
          }
        })
      } else {
        let lastid = sistemas[sistemas.length - 1].id
        dispatch({ type: 'SISTEMAS', value: [...sistemas, { ...sistema, id: lastid + 1 }] })
      }
      setSistema({ id: 0, name: '', value: '' })
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sistemas</Text>
      <View style={styles.row}>
        <View style={styles.picker} >
          <Picker
            selectedValue={sistemaSelected.id}
            onValueChange={onChangeSistemas}
          >
            {sistemas.map((item, key) => <Picker.Item color='#444' key={key} label={item.id ? `${item.name} -> ${item.value} LOC por FP` : item.name} value={item.id} />)}
          </Picker>
        </View>
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.inputName}
          placeholder="Sistema"
          autoCompleteType="off"
          autoCorrect={false}
          value={sistema.name}
          onChangeText={(text) => setSistema({ ...sistema, name: text })}
          selectTextOnFocus
          textContentType='none'
        />
        <TextInput
          style={styles.inputValue}
          placeholder="LOC"
          autoCompleteType="off"
          autoCorrect={false}
          value={sistema.value}
          onChangeText={(text) => setSistema({ ...sistema, value: text })}
          selectTextOnFocus
          textContentType='none'
        />
      </View>
      <View style={styles.rowButton}>
        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={addSistema}
        >
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonDelete}
        >
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
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