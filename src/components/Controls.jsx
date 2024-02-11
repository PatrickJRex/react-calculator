import { useReducer } from "react";
import NumButton from "./NumButton";
import OpButton from "./OpButton";
import TopScreen from './TopScreen';
import { ACTIONS } from "../helpers/actions";
import { evaluate, toDecimal, inversion } from "../helpers/math";

function reducer(state, {type, payload}) {
    switch (type) {
        case ACTIONS.ADD_DIGIT: 
        if(state.overwrite) {
            return {
                ...state,
                overwrite: false,
                currentOperand: payload.digit
            }
        }
        if(payload.digit === "." && state.currentOperand.includes(".")) return state;
        return {
            ...state, 
            currentOperand: `${state.currentOperand || ''}${payload.digit}`
        }
        case ACTIONS.CHOSE_OPERATION: 
        if(state.prevOperand == null && state.currentOperand == null) {
            return state;
        }
        if(state.currentOperand == null) {
            return {
                ...state,
                operation: payload.op
            }
        }
        if(state.prevOperand == null) {
            return {
                ...state,
                prevOperand: state.currentOperand,
                currentOperand: null,
                operation: payload.op
            }
        }
        return {
            ...state, 
            operation: payload.op,
            prevOperand: evaluate(state),
            currentOperand: null
        }
        case ACTIONS.EVALUATE:
            if(state.currentOperand === null || state.prevOperand === null || state.operation === null) {
               return state;
            }
        return {
            ...state,
            overwrite: true,
            prevOperand: null,
            operation: null,
            currentOperand: evaluate(state)
        }
        case ACTIONS.TO_DECIMAL: 
        return {
            ...state,
            currentOperand: toDecimal(state.currentOperand)
        }
        case ACTIONS.INVERT: 
        return {
            ...state,
            currentOperand: inversion(state.currentOperand)
        }
        case ACTIONS.CLEAR: 
        return {}
    }

}

const Controls = () => {
    const [{currentOperand, prevOperand, operation}, dispatch] = useReducer(reducer, {});

    return (
        <>
        <TopScreen currentOperand={currentOperand} prevOperand={prevOperand} operation={operation} />
        <div className="calculator-buttons">
           <button className="button--op" onClick={() => dispatch({type: ACTIONS.CLEAR})}>C</button>
           <button className="button--op" onClick={() => dispatch({type: ACTIONS.INVERT})}>+/-</button>
           <button className="button--op" onClick={() => dispatch({type: ACTIONS.TO_DECIMAL})}>%</button>
           <OpButton dispatch={dispatch} op="+" />   
           <NumButton dispatch={dispatch} digit="7" />
           <NumButton dispatch={dispatch} digit="8" />
           <NumButton dispatch={dispatch} digit="9" />
           <OpButton dispatch={dispatch} op="-" />
           <NumButton dispatch={dispatch} digit="4" />
           <NumButton dispatch={dispatch} digit="5" />
           <NumButton dispatch={dispatch} digit="6" />
           <OpButton dispatch={dispatch} op="x" />
           <NumButton dispatch={dispatch} digit="1" />
           <NumButton dispatch={dispatch} digit="2" />
           <NumButton dispatch={dispatch} digit="3" />
           <OpButton dispatch={dispatch} op="÷" />
           <NumButton dispatch={dispatch} digit="0" />
           <NumButton dispatch={dispatch} digit="." />
           <button className="button--op" onClick={()=>dispatch({type: ACTIONS.EVALUATE})}>=</button>
        </div>
        </>
    );
}

export default Controls;