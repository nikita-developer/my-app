
import React from "react";
import Home from '../../pages/Home/Home'
import Wiki from '../../pages/Wiki/Wiki'
import About from '../../pages/About/About'
import {Routes, Route} from 'react-router-dom';
import './Main.scss'
import Login from "../../pages/Login/Login";

function Main() {
    return(
        <main className="main">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/wiki' element={<Wiki/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </main>
    )
}

export default Main