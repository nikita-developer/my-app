
import React from "react";
import Home from '../../pages/Home/Home'
import Wiki from '../../pages/Wiki/Wiki'
import About from '../../pages/About/About'
import {Routes, Route} from 'react-router-dom';
import './Main.scss'
import Login from "../../pages/Login/Login";
import { connect } from "react-redux";

function Main(props) {
    if(props.auth) {
        return(
            <main className="main">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/wiki' element={<Wiki/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
            </main>
        )
    } else {
        return(
            <main className="main">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth.auth
    }
}

export default connect(mapStateToProps) (Main)