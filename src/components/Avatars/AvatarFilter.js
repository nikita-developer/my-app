import { Component } from "react"

class AvatarFilter extends Component {
    constructor(props) {
        super(props)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleCountryChange = this.handleCountryChange.bind(this)
        this.handleGenderChange = this.handleGenderChange.bind(this)
        this.handleRaceChange = this.handleRaceChange.bind(this)
    }

    handleNameChange(e) {
        this.props.onNameChange(e.target.value)
    }

    handleCountryChange(e) {
        this.props.onCountryChange(e.target.value)
    }

    handleGenderChange(e) {
        this.props.onGenderChange(e.target.value)
    }

    handleRaceChange(e) {
        this.props.onRaceChange(e.target.value)
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
            <div>
                <input
                    value={this.props.name}
                    onChange={this.handleNameChange}
                />
                <select onChange={this.handleCountryChange}>{countrySelect}</select>
                <select onChange={this.handleGenderChange}>{genderSelect}</select>
                <select onChange={this.handleRaceChange}>{raceSelect}</select>
            </div>
        )
    }
}

export default AvatarFilter