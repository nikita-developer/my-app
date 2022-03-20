import React, {Component} from "react"
import "../../scss/btn.scss"
import axios from "axios"

class AvatarAdd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            path: "media.jpg",
            file: "",
            name: false,
            country: false,
            gender: false,
            race: false,
        }
    }

    handlerCountryRepeat = (e) => {
        this.props.onCountryRepeat(e.target.value)
        this.setState({
            country: e.target.value
        })
    }

    handleSend = () => {
        if(this.state.country) {
            axios({
                method: 'POST',
                url: 'http://spasdeveloper.ru/my-app/php/avatars/avatars.php',
                data: {country: this.state}
            })
        } else {
            console.log(this.state.country);
        }
    }

    render() {
        const countryDefaultValue = this.props.countryRepeat ? this.props.countryRepeat : this.props.countryDefault
        const countrySelect = this.props.country.map((item, key) =>
            <option key={key} value={item}>{item}</option>
        )

        console.log(this.state);
        
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
                            onChange={this.handlerCountryRepeat}
                            >
                                {!this.props.countryRepeat && <option disabled value={countryDefaultValue}>{countryDefaultValue}</option>}
                                {countrySelect}
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