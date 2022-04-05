import React, {useEffect} from "react"
import Input from "../../ui/Input/Input"
import axios from 'axios'

function Login() {

    // useEffect(() => {
	// 	axios.get('http://spasdeveloper.ru/my-app/php/authorization/authorization.php').then(response => {
	// 		setLoading(true)
	// 	}).catch(function (error) {
	// 		console.log("Не удалось подключиться к базе", error)
	// 	})
	// }, []);

    return(
        <div className="login">
            <Input type="text" />
            <Input type="password" />
            <button>Отправить</button>
        </div>
    )
}

export default Login