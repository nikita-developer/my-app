import { Component } from "react"

class AvatarFilter extends Component {
    constructor(props) {
        super(props)
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleFilterCountryChange = this.handleFilterCountryChange.bind(this)
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value)
    }

    handleFilterCountryChange(e) {
        this.props.onFilterSelectChange(e.target.value)
    }

    render() {
        const collectionCountry = this.props.country.map((item, key) =>
            <option key={key} value={item.country}>{item.country}</option>
        )

        return(
            <div>
                <input
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                />
                <select
                    onChange={this.handleFilterCountryChange}
                >
                    {collectionCountry}
                </select>
            </div>
        )
    }
}

export default AvatarFilter