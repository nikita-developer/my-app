
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Contacts from '../Pages/Contacts/Contacts'
import About from '../Pages/About/About'
import './Main.css'

function Main() {
    return (
        <div className="main">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </div>
    )
}

export default Main