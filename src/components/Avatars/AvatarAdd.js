import React, {Component} from "react"
import "../../scss/btn.scss"
import axios from "axios"

class AvatarAdd extends Component {
    constructor(props) {
        super(props)
        this.countryRef = React.createRef()
        this.genderRef = React.createRef()
        this.raceRef = React.createRef()

        this.state = {
            path: "media.jpg",
            file: "",
            name: false,
            country: this.props.countryRepeat,
            gender: this.props.genderRepeat,
            race: this.props.raceRepeat,
        }
    }

    handleCountryRepeat = (e) => {
        this.props.onCountryRepeat(e.target.value)
        this.setState({
            country: e.target.value
        })
        if(this.countryRef.current.value !== this.props.countryDefault) {
            this.countryRef.current.classList.remove('error')
        }
    }

    handleGenderRepeat = (e) => {
        this.props.onGenderRepeat(e.target.value)
        this.setState({
            gender: e.target.value
        })
        if(this.genderRef.current.value !== this.props.genderDefault) {
            this.genderRef.current.classList.remove('error')
        }
    }

    handleRaceRepeat = (e) => {
        this.props.onRaceRepeat(e.target.value)
        this.setState({
            race: e.target.value
        })
        if(this.raceRef.current.value !== this.props.raceDefault) {
            this.raceRef.current.classList.remove('error')
        }
    }

    handleSend = () => {
        if(this.state.country && this.state.gender && this.state.race) {
            axios({
                method: 'POST',
                url: 'http://spasdeveloper.ru/my-app/php/avatars/avatars.php',
                data: {state: this.state}
            })
            this.handleError()
        } else {
            this.handleError()
        }
    }

    handleError = () => {
        if(this.countryRef.current.value === this.props.countryDefault) {
            this.countryRef.current.classList.add('error')
        } else {
            this.countryRef.current.classList.remove('error')
        }

        if(this.genderRef.current.value === this.props.genderDefault) {
            this.genderRef.current.classList.add('error')
        } else {
            this.genderRef.current.classList.remove('error')
        }

        if(this.raceRef.current.value === this.props.raceDefault) {
            this.raceRef.current.classList.add('error')
        } else {
            this.raceRef.current.classList.remove('error')
        }
    }

    render() {
        console.log(this.props);

        const countryDefaultValue = this.props.countryRepeat ? this.props.countryRepeat : this.props.countryDefault
        const countrySelect = this.props.country.map((item, key) =>
            <option key={key} value={item}>{item}</option>
        )

        const genderDefaultValue = this.props.genderRepeat ? this.props.genderRepeat : this.props.genderDefault
        const genderSelect = this.props.gender.map((item, key) =>
            <option key={key} value={item}>{item}</option>
        )

        const raceDefaultValue = this.props.raceRepeat ? this.props.raceRepeat : this.props.raceDefault
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
                            className="form__select"
                            defaultValue={countryDefaultValue} 
                            onChange={this.handleCountryRepeat}
                            ref={this.countryRef}
                            >
                                {!this.props.countryRepeat && <option disabled value={countryDefaultValue}>{countryDefaultValue}</option>}
                                {countrySelect}
                        </select>
                        <select 
                            className="form__select"
                            defaultValue={genderDefaultValue} 
                            onChange={this.handleGenderRepeat}
                            ref={this.genderRef}
                            >
                                {!this.props.genderRepeat && <option disabled value={genderDefaultValue}>{genderDefaultValue}</option>}
                                {genderSelect}
                        </select>
                        <select 
                            className="form__select"
                            defaultValue={raceDefaultValue} 
                            onChange={this.handleRaceRepeat}
                            ref={this.raceRef}
                            >
                                {!this.props.raceRepeat && <option disabled value={raceDefaultValue}>{raceDefaultValue}</option>}
                                {raceSelect}
                        </select>
                    </div>
                    <button 
                        className="btn"
                        onClick={this.handleSend}
                    >Загрузить</button>
                </div>
            </React.Fragment>
        )
    }
}

export default AvatarAdd