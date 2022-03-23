
import React, {useState} from "react"
import LogIn from "./LogIn"
import Registration from "./Registration"

export default function Authorization(props) {
    const [isOpen, setlogIsOpen] = useState(props.isOpen || true)
    const handleIsOpen = (isOpen) => {setlogIsOpen(isOpen)}

    return(
        <div className="authorization">
            <div className="authorization__body">
                <div className="authorization__modal">
                    {isOpen ? <LogIn isOpen={handleIsOpen} /> : <Registration isOpen={handleIsOpen} />}
                </div>
            </div>
        </div>
    )
}
