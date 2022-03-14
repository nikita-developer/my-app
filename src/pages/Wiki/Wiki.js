
import React, {Component} from "react";
import Avatars from "../../components/Avatars/Avatars";
import '../../scss/article.scss'
import '../../scss/aside.scss'

class Wiki extends Component {
    render() {
        return (
            <React.Fragment>
                <aside className="aside aside_left"></aside>
                <article className="article article_intro-main">
                    <Avatars 
                        avatars={avatars}
                    />
                </article>
            </React.Fragment>
        )
    }
}

const avatars = {
    all: 'Все',
    country: [ "Все", "Россия", "Франция", "Германия", "Америка"],
    gender: ["Все", "Муж", "Жен"],
    race: ["Все", "Евразийская", "Азиатско-американская", "Экваториальная"],
    humans: [
        {
            name: "Fred",
            img: "/Avatars/media/img-1.jpg",
            country: "Россия",
            gender: 'Муж',
            race: 'Азиатско-американская',
        },
        {
            name: "Никита",
            img: "/Avatars/media/img-1.jpg",
            country: "Франция",
            gender: 'Муж',
            race: 'Евразийская',
        },
        {
            name: "Саша Грей",
            img: "/Avatars/media/img-1.jpg",
            country: "Россия",
            gender: 'Жен',
            race: 'Евразийская',
        },
        {
            name: "Дима",
            img: "/Avatars/media/img-1.jpg",
            country: "Германия",
            gender: 'Муж',
            race: 'Экваториальная',
        },
        {
            name: "Ava Adams",
            img: "/Avatars/media/img-1.jpg",
            country: "Америка",
            gender: 'Жен',
            race: 'Азиатско-американская',
        },
        {
            name: "Максим",
            img: "/Avatars/media/img-1.jpg",
            country: "Россия",
            gender: 'Муж',
            race: 'Экваториальная',
        },
        {
            name: "Евген",
            img: "/Avatars/media/img-1.jpg",
            country: "Россия",
            gender: 'Муж',
            race: 'Экваториальная',
        },
        {
            name: "Анастасия",
            img: "/Avatars/media/img-1.jpg",
            country: "Россия",
            gender: 'Жен',
            race: 'Экваториальная',
        },
    ],
}

export default Wiki