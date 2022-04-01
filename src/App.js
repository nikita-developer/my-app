
import React, {useState, useEffect} from 'react';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Auth from './components/Auth/Auth'
import axios from 'axios'
import { connect } from 'react-redux';
import { authorization } from './store/actions/auth';

function App(props) {
	useEffect(() => {
		axios.get('http://spasdeveloper.ru/my-app/php/authorization/authorization.php').then(response => {
			props.authSuccess()
		})
	}, []);

	return(
		<div className="App">
			<div className='page'>
				<Header />
				{props.auth && <Auth />}
				<Footer />
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		auth: state.auth.auth
	}
}

function mapDispatchToProps(dispatch) {
	return {
		authSuccess: () => dispatch(authorization()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
