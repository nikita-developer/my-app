
import React, {Component} from "react"
import './Avatars.css'

class Avatars extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Nikol',
            country: 'USA',
            img: '/media/Avatars/logo.png',
        }
    }

    render() {
        return(
            <div className="avatars">
                <div className="avatars__wrapper">
                    <div className="avatars__item">
                        <div className="avatars__img">
                            <img src={this.state.img} />
                        </div>
                        <div className="avatars__name">{this.state.name}</div>
                        <div className="avatars__country">{this.state.country}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Avatars