
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
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleFilterCountryChange = this.handleFilterCountryChange.bind(this)
        this.handleFilterGenderChange = this.handleFilterGenderChange.bind(this)
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

    render() {
        return(
            <div className="avatars">
                <div className="avatars__header">
                    <AvatarFilter 
                        name={this.state.name}
                        onNameChange={this.handleNameChange}
                        country={this.props.country}
                        gender={this.props.gender}
                        onFilterSelectChange={this.handleFilterCountryChange}
                        onFilterGenderChange={this.handleFilterGenderChange}
                    />
                </div>
                <div className="avatars__body">
                    <AvatarCard 
                        avatars={this.props.avatars} 
                        all={this.props.all} 
                        name={this.state.name}
                        country={this.state.country}
                        gender={this.state.gender}
                    />
                </div>
            </div>
        )
    }
}

export default Avatars