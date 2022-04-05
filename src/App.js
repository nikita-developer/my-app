
import React, {useState, useEffect} from 'react';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Login from './components/Login/Login'
import Main from './components/Main/Main'

function App(props) {
	const [userSuccess, setUserSuccess] = useState(getCookie('user'))

	if(userSuccess) {
		return(
			<div className="App">
				<div className='page'>
					<Header />
					<Main />
					<Footer />
				</div>
			</div>
		);
	} else {
		return <Login />
	}
}

// проверяем на существование кука
function getCookie(name) {
	var matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

export default App;
