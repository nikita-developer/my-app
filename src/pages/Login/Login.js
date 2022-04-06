import React, {useState} from "react"
import './Login.scss'
import axios from 'axios'
import {connect} from 'react-redux'
import {auth} from "../../store/actions/auth"

function Login(props) {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [checkbox, setCheckbox] = useState('')
    // console.log(props);

    return(
        <form onSubmit={handleSubmit} className="login">
            <div className="login__box">
                <div className="login__head">
                    <div className="login__title">Вход</div>
                </div>
                <div className="login__body">
                    <label className="login__label">
                        <div className="login__field-name">Логин</div>
                        <input 
                            onChange={handleLogin} 
                            className="login__field field" placeholder="Введите логин" 
                        />
                        <div className="login__error">Нет такого логина</div>
                    </label>
                    <label className="login__label">
                        <div className="login__field-name">Пароль</div>
                        <input 
                            onChange={handlePssword} 
                            className="login__field field" placeholder="Введите пароль" 
                            type="password"
                        />
                        <div className="login__error">Нет такого пароля</div>
                    </label>
                    <label className="login__label login__save-data">
                        <input 
                            className="checkbox" 
                            type="checkbox" 
                            onChange={handleCheckbox}
                        />
                        <span>Сохранить логин и пароль</span>
                    </label>
                </div>
                <div className="login__footer">
                    <button type="submit" className="login__btn btn">Отправить</button>
                </div>
            </div>
        </form>
    )

    function handleSubmit (e) {
        e.preventDefault()
        if(login.length > 5 && login && login !== '') {
            axios({
                method: 'POST',
                url: 'http://spasdeveloper.ru/my-app/php/authorization/authorization.php',
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                data: {x: 1}
            })
            .then(function (response) {
                // props.authorization()
                console.log(response.data);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

    function handleLogin(e) {
        setLogin(e.target.value.replace(/ +/g, ' ').trim().toLowerCase())
    }

    function handlePssword(e) {
        setPassword(e.target.value)
    }

    function handleCheckbox(e) {
        setCheckbox(e.target.checked)
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth.auth,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authorization: () => dispatch(auth())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Login)


// useEffect(() => {
// 	axios.get('http://spasdeveloper.ru/my-app/php/authorization/authorization.php').then(response => {
// 		setLoading(true)
// 	}).catch(function (error) {
// 		console.log("Не удалось подключиться к базе", error)
// 	})
// }, []);

// проверяем на существование кука
// function getCookie(name) {
// 	var matches = document.cookie.match(new RegExp(
// 		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
// 	));
// 	return matches ? decodeURIComponent(matches[1]) : undefined;
// }