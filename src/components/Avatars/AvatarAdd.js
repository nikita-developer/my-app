import React, {Component} from "react"
import "../../scss/btn.scss"

class AvatarAdd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            path: "media.jpg",
            file: "",
            name: "",
            country: "",
            gender: "",
            race: "",
        }
    }

    handleChangeCountry = (e) => {
        this.setState({
            country: e.target.value
        })
    }

    handleChangeGender = (e) => {
        this.setState({
            gender: e.target.value
        })
    }

    handleChangeRace = (e) => {
        this.setState({
            race: e.target.value
        })
    }

    handlerDefaultDataAddCountry = (c) => {
        this.props.onDefaultDataAddCountry(c.target.value)
    }

    handlerDefaultDataAddGender = (g) => {
        this.props.onDefaultDataAddGender(g.target.value)
    }

    handlerDefaultDataAddRace = (r) => {
        this.props.onDefaultDataAddRace(r.target.value)
    }

    render() {
        const countrySelect = this.props.country.map((item, key) =>
            <option key={key} value={item}>{item}</option>
        )

        const genderSelect = this.props.gender.map((item, key) =>
            <option key={key} value={item}>{item}</option>
        )

        const raceSelect = this.props.race.map((item, key) =>
            <option key={key} value={item}>{item}</option>
        )

        return(
            <React.Fragment>
                <div className="avatars__modal-media">
                    <img src="media.png" alt="media.png"/>
                </div>
                <input type="file" className="avatars__modal-add" />
                <div className="form">
                    <div className="avatars__modal-field">
                        <input type="text" className="form__field"/>
                    </div>
                    <div className="avatars__modal-field">
                        <select 
                            defaultValue={this.props.data.defaultCountry} 
                            className="form__select" 
                            onChange={(e, c) => {this.handleChangeCountry(e, c); this.handlerDefaultDataAddCountry(e, c)}}
                            >{countrySelect}</select>
                    </div>
                    <div className="avatars__modal-field">
                        <select 
                            defaultValue={this.props.data.defaultGender} 
                            className="form__select" 
                            onChange={(e, g) => {this.handleChangeGender(e, g); this.handlerDefaultDataAddGender(e, g)}}
                            >{genderSelect}</select>
                    </div>
                    <div className="avatars__modal-field">
                        <select 
                            defaultValue={this.props.data.defaultRace} 
                            className="form__select" 
                            onChange={(e, r) => {this.handleChangeRace(e, r); this.handlerDefaultDataAddRace(e, r)}}
                            >{raceSelect}</select>
                    </div>
                    <button className="btn">Загрузить</button>
                </div>
            </React.Fragment>
        )
    }
}

export default AvatarAdd