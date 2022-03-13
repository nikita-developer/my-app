
import React, {Component} from "react"
import AvatarCard from './AvatarCard'
import AvatarFilter from './AvatarFilter'
import './Avatars.scss'

class Avatars extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: '',
            thisCountry: 'Германия',
        }

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleFilterCountryChange = this.handleFilterCountryChange.bind(this)
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    handleFilterCountryChange(thisCountry) {
        this.setState({
            thisCountry: thisCountry
        })
    }

    render() {
        return(
            <div className="avatars">
                <div className="avatars__header">
                    <AvatarFilter 
                        filterText={this.state.filterText}
                        onFilterTextChange={this.handleFilterTextChange}
                        country={this.props.country}
                        onFilterSelectChange={this.handleFilterCountryChange}
                    />
                </div>
                <div className="avatars__body">
                    <AvatarCard 
                        avatars={this.props.avatars} 
                        filterText={this.state.filterText}
                        thisCountry={this.state.thisCountry}
                    />
                </div>
            </div>
        )
    }
}

export default Avatars