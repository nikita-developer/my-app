
import React, {Component} from "react"
// import AvatarAdd from "./AvatarAdd"
import AvatarCard from "./AvatarCard"
import AvatarFilter from "./AvatarFilter"
import axios from "axios"
import "./Avatars.scss"

class Avatars extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatars: "",
            useName: "",
            useCountry: "",
            useGender: "",
            useRace: "",
            loading: false,
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleCountryChange = this.handleCountryChange.bind(this)
        this.handleGenderChange = this.handleGenderChange.bind(this)
        this.handleRaceChange = this.handleRaceChange.bind(this)
        this.handleAvatarsAdd = this.handleAvatarsAdd.bind(this)
    }

    componentDidMount() {
        axios.post('http://spasdeveloper.ru/my-app/php/avatars.php').then(res => {
            this.setState({
                avatars: res.data,
                loading: true,
                useCountry: res.data.all,
                useGender: res.data.all,
                useRace: res.data.all,
            })
        })
    }

    handleNameChange(useName) {
        this.setState({
            useName: useName
        });
    }

    handleCountryChange(useCountry) {
        this.setState({
            useCountry: useCountry
        })
    }

    handleGenderChange(useGender) {
        this.setState({
            useGender: useGender
        })
    }

    handleRaceChange(useRace) {
        this.setState({
            useRace: useRace
        })
    }

    handleAvatarsAdd(humans) {
        this.setState({
            humans: humans
        })
    }

    render() {
        console.log(this.state);
        if(this.state.loading) {
            return(
                <div className="avatars">
                    <div className="avatars__header">
                        {/* <AvatarAdd
                            humans={this.avatars.humans}
                            onAvatarsAdd={this.handleAvatarsAdd}
                        /> */}
                        <AvatarFilter 
                            all={this.state.avatars.all}
                            name={this.state.name}
                            country={this.state.avatars.country}
                            gender={this.state.avatars.gender}
                            race={this.state.avatars.race}
                            onNameChange={this.handleNameChange}
                            onCountryChange={this.handleCountryChange}
                            onGenderChange={this.handleGenderChange}
                            onRaceChange={this.handleRaceChange}
                        />
                    </div>
                    <div className="avatars__body">
                        <AvatarCard 
                            name={this.state.useName}
                            all={this.state.avatars.all}
                            country={this.state.useCountry}
                            gender={this.state.useGender}
                            race={this.state.useRace}
                            humans={this.state.avatars.humans} 
                        />
                    </div>
                </div>
            )
        } else {
            return <div>123</div>
        }
    }
}

// const avatars = {
//     "all": "Все",
//     "country": ["Франция", "Германия", "Америка"],
//     "gender": ["Муж", "Жен"],
//     "race": ["Евразийская", "Азиатско-американская", "Экваториальная"],
//     "humans": [
//         {   
//             "id": 1,
//             "name": "Fred",
//             "img": "/Avatars/media/img-1.jpg",
//             "country": "Россия",
//             "gender": "Муж",
//             "race": "Азиатско-американская"
//         },
//         {
//             "id": 2,
//             "name": "Никита",
//             "img": "/Avatars/media/img-1.jpg",
//             "country": "Франция",
//             "gender": "Муж",
//             "race": "Евразийская"
//         },
//         {
//             "id": 3,
//             "name": "Саша Грей",
//             "img": "/Avatars/media/img-1.jpg",
//             "country": "Россия",
//             "gender": "Жен",
//             "race": "Евразийская"
//         },
//         {
//             "id": 4,
//             "name": "Дима",
//             "img": "/Avatars/media/img-1.jpg",
//             "country": "Германия",
//             "gender": "Муж",
//             "race": "Экваториальная"
//         },
//         {
//             "id": 5,
//             "name": "Ava Adams",
//             "img": "/Avatars/media/img-1.jpg",
//             "country": "Америка",
//             "gender": "Жен",
//             "race": "Азиатско-американская"
//         },
//         {
//             "id": 6,
//             "name": "Максим",
//             "img": "/Avatars/media/img-1.jpg",
//             "country": "Россия",
//             "gender": "Муж",
//             "race": "Экваториальная"
//         },
//         {
//             "id": 7,
//             "name": "Евген",
//             "img": "/Avatars/media/img-1.jpg",
//             "country": "Россия",
//             "gender": "Муж",
//             "race": "Экваториальная"
//         },
//         {
//             "id": 8,
//             "name": "Анастасия",
//             "img": "/Avatars/media/img-1.jpg",
//             "country": "Россия",
//             "gender": "Жен",
//             "race": "Экваториальная"
//         }
//     ]
// }

export default Avatars