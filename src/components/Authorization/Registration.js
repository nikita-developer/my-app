
import React from "react"
import Button from "../../ui/Button/Button"
import Input from "../../ui/Input/Input"

export default function Registration(props) {
    return(
        <div className="login login_center">
            {/* открываем форму входа */}
            <div className="login__title">Регистрация</div>
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
                <Button className="login__btn" text="Зарегистрироваться" />
                <Button 
                    className="login__btn" 
                    text="Войти" 
                    onClick={() => props.isOpen(true)}
                />
            </div>
        </div>
    )
}
