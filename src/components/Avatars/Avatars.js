
import React, {Component} from "react"
import './Avatars.scss'
// import dataAvatars from './dataAvatars.json'
// import axios from "axios"

class Avatars extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // dataAvatars: dataAvatars.users
            dataAvatars: [
                {
                    name: "Fred",
                    img: "/media/avatars/img-1.jpg"
                },
                {
                    name: "Никита",
                    img: "/media/avatars/img-1.jpg"
                },
                {
                    name: "Дима",
                    img: "/media/avatars/img-1.jpg"
                },
                {
                    name: "Максим",
                    img: "/media/avatars/img-1.jpg"
                },
                {
                    name: "Евген",
                    img: "/media/avatars/img-1.jpg"
                }
            ]
        }
    }

    // componentDidMount() {
    //     axios.get(dataAvatars).then(res => {
    //         this.setState({
    //             users: res.data.users,
    //         })
    //     });
    // }

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