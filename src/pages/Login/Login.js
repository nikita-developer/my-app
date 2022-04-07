import React, {useState} from "react"
import './Login.scss'
import axios from 'axios'
import {connect} from 'react-redux'
import {auth} from "../../store/actions/auth"

function Login(props) {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [checkbox, setCheckbox] = useState(false)
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
                            name="login"
                            onChange={handleLogin} 
                            className="login__field field" placeholder="Введите логин" 
                        />
                        <div className="login__error">Не меньше 5 символов</div>
                    </label>
                    <label className="login__label">
                        <div className="login__field-name">Пароль</div>
                        <input 
                            name="password"
                            onChange={handlePssword} 
                            className="login__field field" placeholder="Введите пароль" 
                            type="password"
                        />
                        <div className="login__error">Не меньше 8 символов</div>
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
        if(login.length < 5 || !login || login == '') {
            e.target.elements.login.classList.add('error')
            return
        }

        if(password.length < 8 || !password || password == '') {
            e.target.elements.password.classList.add('error')
            return
        }

        axios({
            method: 'POST',
            url: 'http://spasdeveloper.ru/my-app/php/authorization/authorization.php',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: {
                login: login,
                password: password,
            }
        })
        .then(function (response) {
            if(response.data) {
                props.authorization()
            } else {
                console.log(response.data);
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    function handleLogin(e) {
        let result = e.target.value.replace(/ +/g, ' ').trim().toLowerCase()
        setLogin(result)
        if(result.length < 5) {
            e.target.classList.add('error')
        } else {
            e.target.classList.remove('error')
        }
    }

    function handlePssword(e) {
        let result = e.target.value
        setPassword(result)
        if(result.length < 8) {
            e.target.classList.add('error')
        } else {
            e.target.classList.remove('error')
        }
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