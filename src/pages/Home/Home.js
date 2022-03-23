
import React, {useState} from 'react'
import Input from "../../ui/Input/Input";

const Home = () => {
    const [value, setVal] = useState(1)
    const handleChanges = value => setVal(value)

    return (
        <div>
            <Input onChanges={handleChanges} value={value}/>
            <p>{value}</p>
        </div>
    )
}

export default Home