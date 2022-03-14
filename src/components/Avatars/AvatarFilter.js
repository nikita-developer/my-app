import { Component } from "react"

class AvatarFilter extends Component {
    constructor(props) {
        super(props)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleFilterCountryChange = this.handleFilterCountryChange.bind(this)
        this.handleFilterGenderChange = this.handleFilterGenderChange.bind(this)
        this.handleFilterRaceChange = this.handleFilterRaceChange.bind(this)
    }

    handleNameChange(e) {
        this.props.onNameChange(e.target.value)
    }

    handleFilterCountryChange(e) {
        this.props.onFilterSelectChange(e.target.value)
    }

    handleFilterGenderChange(e) {
        this.props.onFilterGenderChange(e.target.value)
    }

    handleFilterRaceChange(e) {
        this.props.onFilterRaceChange(e.target.value)
    }

    render() {
        const countrySelect = this.props.country.map((item, key) =>
            <option key={key} value={item.country}>{item.country}</option>
        )

        const genderSelect = this.props.gender.map((item, key) =>
            <option key={key} value={item.gender}>{item.gender}</option>
        )

        const raceSelect = this.props.race.map((item, key) =>
            <option key={key} value={item.gender}>{item.race}</option>
        )

        return(
            <div>
                <input
                    value={this.props.name}
                    onChange={this.handleNameChange}
                />
                <select onChange={this.handleFilterCountryChange}>{countrySelect}</select>
                <select onChange={this.handleFilterGenderChange}>{genderSelect}</select>
                <select onChange={this.handleFilterRaceChange}>{raceSelect}</select>
            </div>
        )
    }
}

export default AvatarFilter