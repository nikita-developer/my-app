
import React from 'react';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
// import Main from "./components/Main/Main"
import Authorization from './components/Authorization/Authorization';

function App() {
	return(
		<div className="App">
			<div className='page'>
				<Header />
				{/* <Main /> */}
				<Authorization />
				<Footer />
			</div>
		</div>
	);
}

export default App;
