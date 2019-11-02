import React from 'react';
import {Provider}from 'react-redux';
import store from './src/store/index.js';

import Tabelas from './src/pages/Tabelas/Tabelas.js'

export default function App() {
 
  return (
    <Provider store={store}>
      <Tabelas/>
    </Provider>
  );
}
