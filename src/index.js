import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './App';

const store = configureStore();

function Root() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <App />
          </div>
        </Router>
      </Provider>
    );
}

render(<Root />, document.querySelector('#root'));
