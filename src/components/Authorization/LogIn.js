
import React from "react"
import Button from "../../ui/Button/Button"
import Input from "../../ui/Input/Input"

function LogIn() {
    return(
        <form className="login login_center">
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
                <Button className="login__btn" text="Войти" />
                <Button className="login__btn" text="Зарегистрироваться" />
            </div>
        </form>
    )
}

export default LogIn
