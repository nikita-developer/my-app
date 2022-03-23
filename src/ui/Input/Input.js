import React from 'react'

const Input = (props) => {
    return(
        <div className={"filed " + props.className}>
            <input 
                className="filed__input"
                placeholder={props.placeholder || ""}
                type={props.type || "text"}
                name={props.name || ""}
            />
            {(props.error || false) && <div className="field__error">{props.errorText}</div>}
        </div>
    )
}

export default Input