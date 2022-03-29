
import React from "react"
import Input from "../../ui/Input/Input"

export default function LogIn() {
    return(
        <div className="login login_center">
            <div className="login__title">Вход</div>
            <div className="login__body">
                <div className="login__field">
                    <Input 
                        className="login__filed" 
                        errorText="Нет такого логина"
                        placeholder="Введите логин" 
                    />
                </div>
                <div className="login__field">
                    <Input 
                        type="password"
                        className="login__filed" 
                        errorText="Нет такого пароля"
                        placeholder="Введите пароль" 
                    />
                </div>
                <button className="btn login__btn">Войти</button>
                <button 
                    className="btn login__btn"
                    // onClick={() => authorizationChange(true, false)}
                >Зарегистрироваться</button>
            </div>
        </div>
    )
}
