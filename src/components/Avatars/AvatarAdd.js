import React, {Component} from "react"
import Modal from "../Modal/Modal"
import "../../scss/btn.scss"

class AvatarHtml extends Component {
    render() {
        return <div>222</div>
    }
}

class AvatarAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }
        this.handleClickOpenModal = this.handleClickOpenModal.bind(this)
        this.handleClickCloseModal = this.handleClickCloseModal.bind(this)
    }

    handleClickOpenModal() {
        this.setState({
            modal: true
        })
    }

    handleClickCloseModal() {
        this.setState({
            modal: false
        })
    }



    render() {
        if(this.state.modal) {
            return(
                <React.Fragment>
                    <button className="avatars__btn btn" onClick={this.handleClickOpenModal} >Добавить</button> 
                    <Modal component={<AvatarHtml />} onClickClose={this.handleClickCloseModal} />
                </React.Fragment>
            )
        } else {
            return <button className="avatars__btn btn" onClick={this.handleClickOpenModal} >Добавить</button>
        }
    }
}

export default AvatarAdd