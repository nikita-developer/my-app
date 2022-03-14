
import React, {Component} from "react"
import AvatarCard from './AvatarCard'
import AvatarFilter from './AvatarFilter'
import './Avatars.scss'

class Avatars extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            country: this.props.all,
            gender: this.props.all,
            race: this.props.all,
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleFilterCountryChange = this.handleFilterCountryChange.bind(this)
        this.handleFilterGenderChange = this.handleFilterGenderChange.bind(this)
        this.handleFilterRaceChange = this.handleFilterRaceChange.bind(this)
    }

    handleNameChange(name) {
        this.setState({
            name: name
        });
    }

    handleFilterCountryChange(country) {
        this.setState({
            country: country
        })
    }

    handleFilterGenderChange(gender) {
        this.setState({
            gender: gender
        })
    }

    handleFilterRaceChange(race) {
        this.setState({
            race: race
        })
    }

    render() {
        return(
            <div className="avatars">
                <div className="avatars__header">
                    <AvatarFilter 
                        name={this.state.name}
                        onNameChange={this.handleNameChange}
                        country={this.props.country}
                        gender={this.props.gender}
                        race={this.props.race}
                        onFilterSelectChange={this.handleFilterCountryChange}
                        onFilterGenderChange={this.handleFilterGenderChange}
                        onFilterRaceChange={this.handleFilterRaceChange}
                    />
                </div>
                <div className="avatars__body">
                    <AvatarCard 
                        avatars={this.props.avatars} 
                        all={this.props.all} 
                        name={this.state.name}
                        country={this.state.country}
                        gender={this.state.gender}
                        race={this.state.race}
                    />
                </div>
            </div>
        )
    }
}

export default Avatars