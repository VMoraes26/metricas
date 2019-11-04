import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Picker } from 'react-native';

import styles from './style';

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

  function saveSistema() {
    if (sistema.name && sistema.value) {
      if (sistema.id) {
        dispatch({ type: 'UPDATESISTEMA', value: sistema })
      } else {
        let lastid = sistemas[sistemas.length - 1].id
        dispatch({ type: 'ADDSISTEMA', value: { ...sistema, id: lastid + 1 } })
      }
      setSistema({ id: 0, name: '', value: '' })
    }
  }

  function deleteSistema() {
    if (sistema.id) {
      dispatch({ type: 'DELETESISTEMA', value: sistema })
      setSistema({ id: 0, name: '', value: '' })
    }
  }

  function onChangeLinguagens(temValue, itemIndex) {
    setLinguagemSelected(linguagens[itemIndex])
    if (linguagens[itemIndex].id !== 0) {
      setLinguagem(linguagens[itemIndex])
    } else {
      setLinguagem({ id: 0, name: '', value: '' })
    }
  }

  function saveLinguagem() {
    if (linguagem.name && linguagem.value) {
      if (linguagem.id) {
        dispatch({ type: 'UPDATELINGUAGEM', value: linguagem })
      } else {
        let lastid = linguagens[linguagens.length - 1].id
        dispatch({ type: 'ADDLINGUAGEM', value: { ...linguagem, id: lastid + 1 } })
      }
      setLinguagem({ id: 0, name: '', value: '' })
    }
  }

  function deleteLinguagem() {
    if (linguagem.id) {
      dispatch({ type: 'DELETELINGUAGEM', value: linguagem })
      setLinguagem({ id: 0, name: '', value: '' })
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
          onPress={saveSistema}
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={deleteSistema}
        >
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Linguagens</Text>
      <View style={styles.row}>
        <View style={styles.picker} >
          <Picker
            selectedValue={linguagemSelected.id}
            onValueChange={onChangeLinguagens}
          >
            {linguagens.map((item, key) => <Picker.Item color='#444' key={key} label={item.id ? `${item.name} -> ${item.value} LOC por FP` : item.name} value={item.id} />)}
          </Picker>
        </View>
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.inputName}
          placeholder="Sistema"
          autoCompleteType="off"
          autoCorrect={false}
          value={linguagem.name}
          onChangeText={(text) => setLinguagem({ ...linguagem, name: text })}
          selectTextOnFocus
          textContentType='none'
        />
        <TextInput
          style={styles.inputValue}
          placeholder="LOC"
          autoCompleteType="off"
          autoCorrect={false}
          value={linguagem.value}
          onChangeText={(text) => setLinguagem({ ...linguagem, value: text })}
          selectTextOnFocus
          textContentType='none'
        />
      </View>
      <View style={styles.rowButton}>
        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={saveLinguagem}
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={deleteLinguagem}
        >
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}