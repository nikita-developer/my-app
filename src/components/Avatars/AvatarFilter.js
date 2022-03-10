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
        return(
            <div>
                <input
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                />
            </div>
        )
    }
}

export default AvatarFilter