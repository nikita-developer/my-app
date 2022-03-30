import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './scss/_variables.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/reducers/rootReducer';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// useEffect(() => {
//     axios.get('http://spasdeveloper.ru/my-app/php/authorization/authorization.php').then(response => {
//         setAuth(response.data)
//     })
// }, []);
