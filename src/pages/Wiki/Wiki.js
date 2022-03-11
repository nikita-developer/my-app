
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
                        avatars={AVATARS} 
                        country={COUNTRY}
                    />
                </article>
            </React.Fragment>
        )
    }
}

const AVATARS = [
    {
        name: "Fred",
        img: "/Avatars/media/img-1.jpg"
    },
    {
        name: "Никита",
        img: "/Avatars/media/img-1.jpg"
    },
    {
        name: "Дима",
        img: "/Avatars/media/img-1.jpg"
    },
    {
        name: "Максим",
        img: "/Avatars/media/img-1.jpg"
    },
    {
        name: "Евген",
        img: "/Avatars/media/img-1.jpg"
    }
]

const COUNTRY = [
    {
        country: "Россия",
    },
    {
        country: "Франция",
    },
    {
        country: "Германия",
    },
]

export default Wiki