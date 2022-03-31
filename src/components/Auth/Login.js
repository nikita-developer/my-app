import React from "react"
import Input from "../../ui/Input/Input"

function Login() {
    return(
        <div className="login">
            <Input type="text" />
            <Input type="password" />
            <button>Отправить</button>
        </div>
    )
}

export default Login