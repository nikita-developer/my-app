
import React from "react"
import LogIn from "./LogIn"
import Registration from "./Registration"

export default function Authorization() {
    return(
        <div className="authorization">
            <div className="authorization__body">
                <div className="authorization__modal">
                    <LogIn />
                    <Registration />
                </div>
            </div>
        </div>
    )
}
