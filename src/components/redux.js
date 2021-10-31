const redux = require('redux');

// Начальный state. Можно подключать другие state
const initialState = {
  count: 0,
};

// Reducer обычная функция для преобразования
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD': return {
      count: state.count + 1,
    }
    case 'SUB': return {
      count: state.count - 1,
    }
    case 'ADD_NUMBER': return {
      count: state.count + action.value,
    }
    default: return state;
  }
};

// Store в store передаем Reducer
const store = redux.createStore(reducer);

// Подписываемся на изменения store
// При изменении store реагируют компоненты react, и отрисовываются при изменении store
store.subscribe(() => {
  console.log('Subscribe:', store.getState())
});

// Actions. Меняет store
const addCounter = { type: 'ADD' }
store.dispatch(addCounter);

store.dispatch({ type: 'SUB' });

store.dispatch({
  type: 'ADD_NUMBER',
  value: 10
});
