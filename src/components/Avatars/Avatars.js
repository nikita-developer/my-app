
import React, {Component} from "react"
import './Avatars.scss'
import axios from "axios"

class Avatars extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataAvatars: false
        }
    }

    componentDidMount() {
        axios.get('/Avatars/dataAvatars.json').then(res => {
            this.setState({
                dataAvatars: res.data.users
            })
        });
    }

    render() {
        if(this.state.dataAvatars) {
            return (
                <div className="avatars">
                    <div className="avatars__body">
                        {this.avtarItem()}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="avatars">
                    <div className="avatars__body">
                        <div>Пусто</div>
                    </div>
                </div>
            )
        }
    }

    avtarItem() {
        return (this.state.dataAvatars.map((user, key) =>
                <figure className="avatars__card" key={key}>
                    <div className="avatars__media"><img src={user.img} alt="name" /></div>
                    <figcaption className="avatars__name">{user.name}</figcaption>
                </figure>
            )
        );
    }
}

export default Avatars