
import React from 'react';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Counter from './Counter';

function App() {
	return(
		<div className="App">
			<div className='page'>
				<Header />
				{/* <Authorization />
				<Main /> */}
				<Counter />
				<Footer />
			</div>
		</div>
	);
}

export default App;
