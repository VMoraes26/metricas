import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { Container, Header, Body, Icon, Tab, Tabs, TabHeading } from 'native-base';
import Tabelas from './pages/Tabelas'
import Resultados from './pages/Resultados'
import Configuracoes from './pages/Configuracoes'

export default function Routes() {

  return (
    <Container style={{ marginTop: Platform.OS === 'android' ? 24 : 0 }}>
      <Header androidStatusBarColor="#128C7E" style={styles.header} hasTabs>
        <Body>
          <Text style={styles.title}>
            Métricas
          </Text>
        </Body>
      </Header>
      <View style={styles.container}>
        <Tabs>
          <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="list" /></TabHeading>}>
            <Tabelas />
          </Tab>
          <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="calculator" /></TabHeading>}>
            <Resultados />
          </Tab>
          <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="cogs" /></TabHeading>}>
            <Configuracoes />
          </Tab>
        </Tabs>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: "#696969",
  },
  header: {
    backgroundColor: "#696969",
  },
  container: {
    flex: 1,
  },
  title: {
    alignSelf: 'stretch',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  }
});