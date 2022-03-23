
import React from "react"
import Button from "../../ui/Button/Button"
import Input from "../../ui/Input/Input"

export default function LogIn(props) {
    return(
        <form className="login login_center">
            {/* открываем форму регистрации */}
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
                <Button 
                    className="login__btn" 
                    text="Зарегистрироваться"
                    onClick={() => props.isOpen(false)}
                />
            </div>
        </form>
    )
}
