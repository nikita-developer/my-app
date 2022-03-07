
import React, {Component} from "react";
import './Avatars.scss';
import axios from "axios";
axios.get('https://api-maps.yandex.ru/2.1/?apikey=ваш API-ключ&lang=ru_RU').then((response) => {
    console.log(response);
});

// Имя сервера БД - server251.hosting.reg.ru
// Имя пользователя (логин) БД - u1305374_spas
// Пароль пользователя БД - govno1994
// Имя БД - u1305374_spas

class Avatars extends Component {
    render() {
        return (
            <div className="avatars">
                <div className="avatars__body">
                    <figure className="avatars__card">
                        <div className="avatars__media"><img src="images/thumb3.jpg" alt="name" /></div>
                        <figcaption className="avatars__name">Купеческий клуб</figcaption>
                    </figure>
                    <figure className="avatars__card">
                        <div className="avatars__media"><img src="images/thumb3.jpg" alt="name" /></div>
                        <figcaption className="avatars__name">Купеческий клуб</figcaption>
                    </figure>
                    <figure className="avatars__card">
                        <div className="avatars__media"><img src="images/thumb3.jpg" alt="name" /></div>
                        <figcaption className="avatars__name">Купеческий клуб</figcaption>
                    </figure>
                    <figure className="avatars__card">
                        <div className="avatars__media"><img src="images/thumb3.jpg" alt="name" /></div>
                        <figcaption className="avatars__name">Купеческий клуб</figcaption>
                    </figure>
                    <figure className="avatars__card">
                        <div className="avatars__media"><img src="images/thumb3.jpg" alt="name" /></div>
                        <figcaption className="avatars__name">Купеческий клуб</figcaption>
                    </figure>
                    <figure className="avatars__card">
                        <div className="avatars__media"><img src="images/thumb3.jpg" alt="name" /></div>
                        <figcaption className="avatars__name">Купеческий клуб</figcaption>
                    </figure>
                    <figure className="avatars__card">
                        <div className="avatars__media"><img src="images/thumb3.jpg" alt="name" /></div>
                        <figcaption className="avatars__name">Купеческий клуб</figcaption>
                    </figure>
                    <figure className="avatars__card">
                        <div className="avatars__media"><img src="images/thumb3.jpg" alt="name" /></div>
                        <figcaption className="avatars__name">Купеческий клуб</figcaption>
                    </figure>
                    <figure className="avatars__card">
                        <div className="avatars__media"><img src="images/thumb3.jpg" alt="name" /></div>
                        <figcaption className="avatars__name">Купеческий клуб</figcaption>
                    </figure>
                    <figure className="avatars__card">
                        <div className="avatars__media"><img src="images/thumb3.jpg" alt="name" /></div>
                        <figcaption className="avatars__name">Купеческий клуб</figcaption>
                    </figure>
                    <figure className="avatars__card">
                        <div className="avatars__media"><img src="images/thumb3.jpg" alt="name" /></div>
                        <figcaption className="avatars__name">Купеческий клуб</figcaption>
                    </figure>
                    <figure className="avatars__card">
                        <div className="avatars__media"><img src="images/thumb3.jpg" alt="name" /></div>
                        <figcaption className="avatars__name">Купеческий клуб</figcaption>
                    </figure>
                </div>
            </div>
        )
    }
}

export default Avatars