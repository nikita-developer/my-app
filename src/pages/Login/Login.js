import React from "react"
import './Login.scss'

function Login() {
    return(
        <div className="login">
            <div className="login__box">
                <div className="login__head">
                    <div className="login__title">Вход</div>
                </div>
                <div className="login__body">
                    <label className="login__label">
                        <div className="login__field-name">Логин</div>
                        <input className="login__field field" placeholder="Введите логин" />
                        <div className="login__error">Нет такого логина</div>
                    </label>
                    <label className="login__label">
                        <div className="login__field-name">Пароль</div>
                        <input className="login__field field" placeholder="Введите пароль" />
                        <div className="login__error">Нет такого пароля</div>
                    </label>
                </div>
                <div className="login__footer">
                    <button className="login__btn btn">Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Login


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