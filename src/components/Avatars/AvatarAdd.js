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

        this.handlerDefaultDataAdd = this.handlerDefaultDataAdd.bind(this)
    }

    // replace(/\s+/g, " ").trim()

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

    handlerDefaultDataAdd(c) {
        this.props.onDefaultDataAdd(c.target.value)
    }

    render() {
        // console.log(this.props);

        const countrySelect = this.props.country.map((item, key) =>
            (item === this.props.data.defaultCountry) ? <option selected key={key} value={item}>{item}</option> : <option key={key} value={item}>{item}</option>
        )

        const genderSelect = this.props.gender.map((item, key) =>
            (item === this.props.data.defaultGender) ? <option selected key={key} value={item}>{item}</option> : <option key={key} value={item}>{item}</option>
        )

        const raceSelect = this.props.race.map((item, key) =>
            (item === this.props.data.defaultRace) ? <option selected key={key} value={item}>{item}</option> : <option key={key} value={item}>{item}</option>
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
                        <select className="form__select" onChange={(e, c) => {this.handleChangeCountry(e, c); this.handlerDefaultDataAdd(e, c)}}><option selected disabled value="Выберите страну">Выберите страну</option>{countrySelect}</select>
                    </div>
                    <div className="avatars__modal-field">
                        <select className="form__select" onChange={this.handleChangeGender}>{genderSelect}</select>
                    </div>
                    <div className="avatars__modal-field">
                        <select className="form__select" onChange={this.handleChangeRace}>{raceSelect}</select>
                    </div>
                    <button className="btn">Загрузить</button>
                </div>
            </React.Fragment>
        )
    }
}

export default AvatarAdd