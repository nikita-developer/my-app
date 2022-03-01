
import React, {Component} from "react"
import './Avatars.css'

class Avatars extends Component {
    constructor() {
        super()
        this.state = {
            human: [
                {
                    name: 'Nikol',
                    country: 'USA',
                    img: '/media/Avatars/logo.png',
                },
                {
                    name: 'Nikol2',
                    country: 'USA2',
                    img: '/media/Avatars/logo.png',
                },
                {
                    name: 'Nikol3',
                    country: 'USA3',
                    img: '/media/Avatars/logo.png',
                },
            ]
        }
    }

    render() {
        const avtarItem = this.state.human.map((item, key) =>
            <div className="avatars__item" key={key}>
                <div className="avatars__img">
                    <img src={item.img}/>
                </div>
                <div className="avatars__name">{item.name}</div>
                <div className="avatars__country">{item.country}</div>
            </div>
        );

        return (
            <div className="avatars">
                <div className="avatars__wrapper">
                    {avtarItem}
                </div>
            </div>
        )
    }
}

export default Avatars