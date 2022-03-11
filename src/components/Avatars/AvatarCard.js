import React, { Component } from "react";

class AvatarCard extends Component {
    render() {
        const searchText = this.props.filterText.toLowerCase()

        const card = this.props.avatars.filter(function (e) {
            if(e.name.toLowerCase().indexOf(searchText) !== -1) {
                return e.name
            }
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