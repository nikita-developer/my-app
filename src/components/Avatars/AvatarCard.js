import React, { Component } from "react";

class AvatarCard extends Component {
    render() {
        const searchText = this.props.filterText.toLowerCase()
        const searchCountry = this.props.thisCountry

        let card = this.props.avatars.filter(function (e) {
            return e.name.toLowerCase().indexOf(searchText) !== -1
        });

        card = card.filter(function (e) {
            return e.country === searchCountry
        });

        const collectionCard = card.map((avatar, key) =>
            <figure className="avatars__card" key={key}>
                <div className="avatars__media"><img src={avatar.img} alt="name" /></div>
                <figcaption className="avatars__name">{avatar.name}</figcaption>
            </figure>
        )

        return(
            <React.Fragment>
                {collectionCard}
            </React.Fragment>
        )
    }
}

export default AvatarCard