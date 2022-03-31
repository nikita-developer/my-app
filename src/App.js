
import React, {useState, useEffect} from 'react';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Auth from './components/Auth/Auth'
import {connect} from 'react-redux'
import {authorization} from './redux/actions/actions'

function App(props) {
	// const [checkAuth, setCheckAuth] = useState(false)

	// useEffect(() => {
	// 	axios.get('http://spasdeveloper.ru/my-app/php/authorization/authorization.php').then(response => {
	// 		checkAuth(response.data)
	// 	})
	// }, []);

	console.log(props);

	return(
		<div className="App">
			<div className='page'>
				<Header />
				<Auth />
				<Footer />
			</div>
		</div>
	);
}

function mapStateToProps(state) {
    return {
        auth2: state.auth.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        auth: dispatch(authorization()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
