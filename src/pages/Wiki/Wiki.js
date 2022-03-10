
import React, {Component} from "react";
import Avatars from "../../components/Avatars/Avatars";
import '../../scss/article.scss'
import '../../scss/aside.scss'

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

class Wiki extends Component {
    render() {
        return (
            <React.Fragment>
                <aside className="aside aside_left"></aside>
                <article className="article article_intro-main">
                    <Avatars avatars={AVATARS} />
                </article>
            </React.Fragment>
        )
    }
}

export default Wiki