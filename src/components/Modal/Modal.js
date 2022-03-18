
import React, {Component} from "react"
import "./Modal.scss"

class Modal extends Component {
    handleClickCloseModal = () => {
        this.props.onClickCloseModal(false)
    }

    render() {
        return(
            <div className="modal">
                <div className="modal__background" onClick={this.handleClickCloseModal}></div>
                <div className="modal__body">
                    <div className="modal__close" onClick={this.handleClickCloseModal}>
                        <div className="modal__close-body"></div>
                    </div>
                    {this.props.component}
                </div>
            </div>
        )
    }
}

export default Modal