import React, { Component } from "react";

class AvatarCard extends Component {
    render() {
        const name = this.props.name.toLowerCase()
        const country = this.props.country
        const gender = this.props.gender
        const all = this.props.all

        let card = this.props.avatars.filter(function (e) {
            return e.name.toLowerCase().indexOf(name) !== -1
        });

        if(country !== all) {
            card = card.filter(function (e) {
                return e.country === country
            });
        }

        if(gender !== all) {
            card = card.filter(function (e) {
                return e.gender === gender
            });
        }

        const collectionCard = card.map((avatar, key) =>
            <figure className="avatars__card" key={key}>
                <div className="avatars__media"><img src={avatar.img} alt="name" /></div>
                <figcaption className="avatars__name">{avatar.name}</figcaption>
            </figure>
        )

        return(
            <React.Fragment>{collectionCard}</React.Fragment>
        )
    }
}

export default AvatarCard