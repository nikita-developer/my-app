
import React, {useState} from 'react';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import Authorization from './components/Authorization/Authorization';
import Context from "./context"

function App() {
	// состояние авторизации(скрыта или показана)
	const [authorization, setAuthorization] = useState(true)
	// меняем состояние авторизации
    const authorizationChange = (authorization) => {setAuthorization(authorization)}

	// объект с контекстом
	const value = {
		authorization: authorization,
		authorizationChange: authorizationChange
	}

	return(
		<Context.Provider value={value}>
			<div className="App">
				<div className='page'>
					<Header />
					{authorization ? <Authorization /> : <Main />}
					<Footer />
				</div>
			</div>
		</Context.Provider>
	);
}

export default App;
