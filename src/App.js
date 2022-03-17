
import React, { Component } from 'react';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"

class App extends Component {
	render() {
		return(
			<div className="App">
				<div className='page'>
					<Header />
					<Main />
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
