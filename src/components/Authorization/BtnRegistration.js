
import React, {useContext} from "react"
import Context from "../../context"

export default function BtnRegistration() {
    const {authorizationChange} = useContext(Context)
    return (
        <button 
            className="btn"
            onClick={() => authorizationChange(true, false)}
        >Регистрация</button>
    )
}

