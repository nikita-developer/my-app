
import React, {Component} from "react"
import './Avatars.css'

class Avatars extends Component {
    constructor(props) {
        super(props)
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
            ],
            addAvatarImg: '',
            addAvatarName: '',
            addAvatarCountry: '',
        }

        this.addAvatar = this.addAvatar.bind(this)
        this.inputChange = this.inputChange.bind(this)
    }

    render() {
        return (
            <div className="avatars">
                <div className="avatars__wrapper">
                    <div className="avatars__head">
                        <input className="avatars__field" value={this.state.addAvatarName} onChange={this.inputChange}/>
                        <button className="avatars__btn" onClick={this.addAvatar}>Добавить</button>
                    </div>
                    <div className="avatars__body">
                        {this.avtarItem()}
                    </div>
                </div>
            </div>
        )
    }

    addAvatar() {
        if(Boolean(this.state.addAvatarName.trim())) {
            this.setState({
                human: [...this.state.human, {
                    name: this.state.addAvatarName,
                    country: 'USA3',
                    img: '/media/Avatars/logo.png',
                }]
            })
        }
    }

    inputChange(e) {
        this.setState({
            addAvatarName: e.target.value
        })
    }

    avtarItem() {
        return (this.state.human.map((item, key) =>
                <div className="avatars__item" key={key}>
                    <div className="avatars__img">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="avatars__name">{item.name}</div>
                    <div className="avatars__country">{item.country}</div>
                </div>
            )
        );
    }
}

export default Avatars