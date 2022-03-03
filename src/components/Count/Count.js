import { Component } from "react";

class Count extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

        this.plus = this.plus.bind(this)
        this.minus = this.minus.bind(this)
        this.reset = this.reset.bind(this)
    }

    plus() {
        this.setState({
            count: this.state.count + 1
        })
    }

    minus() {
        this.setState({
            count: this.state.count - 1
        })
    }

    reset() {
        this.setState({
            count: 0
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.plus}>Добавить</button>
                <button onClick={this.minus}>Отнять</button>
                <button onClick={this.reset}>Обнулить</button>
            </div>
        )
    }
}

export default Count