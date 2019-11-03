import { createStore } from 'redux';

import metricas from './state';

const store = createStore(metricas)

export default store;