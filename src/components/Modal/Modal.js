
import React, {Component} from "react"
import "./Modal.scss"

class Modal extends Component {
    constructor(props) {
        super(props)
        this.handleClickCloseModal = this.handleClickCloseModal.bind(this)
    }

    handleClickCloseModal() {
        this.props.onClickClose()
    }

    render() {
        return(
            <div className="modal">
                <div className="modal__body">
                    <div 
                        className="modal__close"
                        onClick={this.handleClickCloseModal}
                        >
                        <div className="modal__close-body"></div>
                        {this.props.component}
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal