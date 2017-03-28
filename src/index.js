import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './App';
// import './index.css';

const store = configureStore();

function Root() {
    return (
      <Provider store={store}>
          <div>
            <App />
          </div>
      </Provider>
    );
}

render(<Root />, document.querySelector('#root'));
