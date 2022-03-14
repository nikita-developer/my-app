import React, { Component } from "react";

class AvatarCard extends Component {
    render() {
        const name = this.props.name.toLowerCase()
        const human = this.props.humans
        const country = this.props.country
        const gender = this.props.gender
        const race = this.props.race
        const all = this.props.all

        let card = human.filter(function (e) {
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

        if(race !== all) {
            card = card.filter(function (e) {
                return e.race === race
            });
        }

        const collection = card.map((elem, key) =>
            <figure className="avatars__card" key={key}>
                <div className="avatars__media"><img src={elem.img} alt="name" /></div>
                <figcaption className="avatars__name">{elem.name}</figcaption>
            </figure>
        )

        return(
            <React.Fragment>{collection}</React.Fragment>
        )
    }
}

export default AvatarCard