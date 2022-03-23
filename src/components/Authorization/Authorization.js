
import React from "react"
import LogIn from "./LogIn"

function Authorization() {
    return(
        <div className="authorization">
            <div className="authorization__body">
                <div className="authorization__modal">
                    <LogIn />
                </div>
            </div>
        </div>
    )
}

export default Authorization
