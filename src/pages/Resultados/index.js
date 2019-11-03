import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default function Resultados() {
    const { FPb, FPr, custo, prazo, prazoMeses, prazoDias, prazoHoras, prazoMinutos } = useSelector(state => state)

    return (
        <View >
            <Text>FPb {FPb}</Text>
            <Text>FPr {FPr}</Text>
            <Text>Custo {custo}</Text>
            <Text>Prazo {prazo}</Text>
            <Text>Prazo Meses {prazoMeses}</Text>
            <Text>Prazo Dias {prazoDias}</Text>
            <Text>Prazo Horas {prazoHoras}</Text>
            <Text>Prazo Minutos {prazoMinutos}</Text>
        </View>
    );
}
