
import React, {useContext} from "react"
import Context from "../../context"

export default function BtnLogIn() {
    const {authorizationChange} = useContext(Context)
    return (
        <button 
            className="btn"
            onClick={() => authorizationChange(true, true)}
        >Войти</button>
    )
}