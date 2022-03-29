
import React from 'react';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import {connect} from 'react-redux'

function App(props) {
	console.log(props);
	
	return(
		<div className="App">
			<div className='page'>
				<Header />
				{/* <Authorization />
				<Main /> */}

				<div>
					<button onClick={props.onAdd}>Увеличить</button>
					<button onClick={props.onSub}>Уменьшить</button>
					<button onClick={props.onAddTwo}>Увеличить на 2</button>
					<button onClick={() => props.addNumber(15)}>Добавить 15</button>
					<button onClick={() => props.addNumber(-17)}>Вычесть 17</button>
					<hr/>
					<h1>{props.counter}</h1>
				</div>
				<Footer />
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		counter: state.counter
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onAdd: function () {dispatch({type: 'ADD'})},
		onSub: () => dispatch({type: 'SUB'}),
		onAddTwo: () => dispatch({type: 'ADD_TWO'}),
		addNumber: (number) => dispatch({type: 'ADD_NUMBER', payload: number}),
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
