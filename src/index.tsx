import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './redux/reducer';

const store = createStore(reducer);

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
