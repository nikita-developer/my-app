
import React, {Component} from "react"
import AvatarCard from './AvatarCard'
import AvatarFilter from './AvatarFilter'
import './Avatars.scss'

class Avatars extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            country: this.props.avatars.all,
            gender: this.props.avatars.all,
            race: this.props.avatars.all,
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
                        country={this.props.avatars.country}
                        gender={this.props.avatars.gender}
                        race={this.props.avatars.race}
                        onNameChange={this.handleNameChange}
                        onFilterSelectChange={this.handleFilterCountryChange}
                        onFilterGenderChange={this.handleFilterGenderChange}
                        onFilterRaceChange={this.handleFilterRaceChange}
                    />
                </div>
                <div className="avatars__body">
                    <AvatarCard 
                        humans={this.props.avatars.humans} 
                        all={this.props.avatars.all} 
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