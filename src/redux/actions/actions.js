
import {COUNTER_ADD, COUNTER2_ADD, COUNTER_SUB, COUNTER_RESET, COUNTER_RANDOM} from './actionTypes'

export function counter_add() {
    return {
        type: COUNTER_ADD
    }
}

export function counter2_add() {
    return {
        type: COUNTER2_ADD
    }
}

export function counter_sub() {
    return {
        type: COUNTER_SUB
    }
}

export function counter_reset() {
    return {
        type: COUNTER_RESET
    }
}

export function counter_random(number) {
    return {
        type: COUNTER_RANDOM,
        payload: number,
    }
}