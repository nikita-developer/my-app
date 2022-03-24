
import React, {useContext} from "react"
import Context from "../../context"

export default function BtnExit() {
    const {authorizationChange} = useContext(Context)
    return (
        <button 
            className="btn"
            onClick={() => authorizationChange(false)}
        >Выйти</button>
    )
}