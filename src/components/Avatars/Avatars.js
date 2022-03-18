
import React, {Component} from "react"
import AvatarAdd from "./AvatarAdd"
import AvatarCard from "./AvatarCard"
import AvatarFilter from "./AvatarFilter"
import Modal from "../Modal/Modal"
import axios from "axios"
import "./Avatars.scss"

class Avatars extends Component {
    constructor(props) {
        super(props)
        this.state = {
            humans: "",
            useName: "",
            useCountry: avatars.all,
            useGender: avatars.all,
            useRace: avatars.all,
            loading: false,
            isOpenModal: false,
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleCountryChange = this.handleCountryChange.bind(this)
        this.handleGenderChange = this.handleGenderChange.bind(this)
        this.handleRaceChange = this.handleRaceChange.bind(this)

        // modal
        this.handleClickOpenModal = this.handleClickOpenModal.bind(this)
        this.handleClickCloseModal = this.handleClickCloseModal.bind(this)
    }

    componentDidMount() {
        axios.get('http://spasdeveloper.ru/my-app/php/avatars/avatars.php').then(response => {
            this.setState({
                humans: response.data,
                loading: true,
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

    handleClickOpenModal() {
        this.setState({
            isOpenModal: true
        })
    }

    handleClickCloseModal(isOpenModal) {
        this.setState({
            isOpenModal: isOpenModal
        })
    }

    render() {
        if(this.state.loading) {
            return(
                <div className="avatars">
                    <div className="avatars__header">
                        <button 
                            className="avatars__btn btn" 
                            onClick={this.handleClickOpenModal}
                        >Добавить</button>
                        {this.state.isOpenModal && 
                            <Modal 
                                component={<AvatarAdd />} 
                                onClickCloseModal={this.handleClickCloseModal}
                        />}
                        <AvatarFilter 
                            all={avatars.all}
                            country={avatars.country}
                            gender={avatars.gender}
                            race={avatars.race}
                            name={this.state.useName}
                            onNameChange={this.handleNameChange}
                            onCountryChange={this.handleCountryChange}
                            onGenderChange={this.handleGenderChange}
                            onRaceChange={this.handleRaceChange}
                        />
                    </div>
                    <div className="avatars__body">
                        <AvatarCard 
                            name={this.state.useName}
                            all={avatars.all}
                            country={this.state.useCountry}
                            gender={this.state.useGender}
                            race={this.state.useRace}
                            humans={this.state.humans} 
                        />
                    </div>
                </div>
            )
        } else {
            return <div>123</div>
        }
    }
}

let avatars = {
    all: "Все",
    country: ["Франция", "Германия", "Америка"],
    gender: ["Муж", "Жен"],
    race: ["Евразийская", "Азиатско-американская", "Экваториальная"]
}

export default Avatars