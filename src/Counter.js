
import React, { useState } from 'react'
import {connect} from 'react-redux'
import { counter_add, counter_random, counter_reset, counter_sub } from './store/actions/counter';

function Counter(props) {
    const [number, setNumber] = useState(0)

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
    }
}

function mapDispatchToProps(dispatch) {
    return {
        counterAdd: () => dispatch(counter_add()),
        counterSub: () => dispatch(counter_sub()),
        counterReset: () => dispatch(counter_reset()),
        counterRandom: (number) => dispatch(counter_random(number)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter)
