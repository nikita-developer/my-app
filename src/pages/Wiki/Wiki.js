
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
                    <Avatars />
                </article>
            </React.Fragment>
        )
    }
}

export default Wiki