import React, { Component } from "react"
import axios from "axios"

class AvatarAdd extends Component {
    componentDidMount() {
        axios.post('http://spasdeveloper.ru/my-app/php/avatars.php').then(res => {
            console.log(res.data);
        });
    }

    render() {
        return <div></div>
    }
}

export default AvatarAdd