
import React, {useContext} from "react"
import LogIn from "./LogIn"
import Registration from "./Registration"
import Context from "../../context"

export default function Authorization() {
    const {authorization, authorizationChange} = useContext(Context)

    return(
        <div className="authorization">
            <div className="authorization__body">
                <div className="authorization__modal" onClick={() => authorizationChange(false)}>
                    {authorization ? <LogIn /> : <Registration />}
                </div>
            </div>
        </div>
    )
}
