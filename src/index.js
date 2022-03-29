import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './scss/_variables.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// useEffect(() => {
//     axios.get('http://spasdeveloper.ru/my-app/php/authorization/authorization.php').then(response => {
//         setAuth(response.data)
//     })
// }, []);
