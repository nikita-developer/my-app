
import React, { useState } from 'react'
import {connect} from 'react-redux'

function Counter(props) {
    const [number, setNumber] = useState()

    console.log(props);
    return (
        <div>
            <div style={{padding: 20, border: '1px solid #ccc'}}>
                <h1>Counter {props.counter}</h1>
                <br/>
                <hr />
                <br/>
                <div>
                    <button onClick={props.counterAdd}>Увеличить</button>
                    <button onClick={props.counterSub}>Уменьшить</button>
                    <button onClick={props.counterReset}>Сбросить</button>
                    <button onClick={() => props.counterRandom(number)}>Любое число</button>
                    <input onChange={countNumber} type="number" />
                </div>
            </div>
            <div style={{padding: 20, border: '1px solid #ccc'}}>
                <h1>Counter {props.counter2}</h1>
                <br/>
                <hr />
                <br/>
                <div>
                    <button onClick={props.counter2Add}>Увеличить</button>
                </div>
            </div>
        </div>
    )

    function countNumber(e) {
        setNumber(e.target.value)
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter.counter,
        counter2: state.counter2.counter2,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        counterAdd: () => dispatch({type: 'COUNTER_ADD'}),
        counter2Add: () => dispatch({type: 'COUNTER2_ADD'}),
        counterSub: () => dispatch({type: 'COUNTER_SUB'}),
        counterReset: () => dispatch({type: 'COUNTER_RESET'}),
        counterRandom: (number) => dispatch({type: 'COUNTER_RANDOM', payload: number}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter)
