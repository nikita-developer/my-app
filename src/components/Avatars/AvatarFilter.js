import { Component } from "react"

class AvatarFilter extends Component {
    constructor(props) {
        super(props)
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value)
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
                <select>
                    {collectionCountry}
                </select>
            </div>
        )
    }
}

export default AvatarFilter