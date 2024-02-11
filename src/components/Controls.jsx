import { useReducer } from "react";
import NumButton from "./NumButton";
import OpButton from "./OpButton";
import TopScreen from './TopScreen';
import { ACTIONS } from "../helpers/actions";
import evaluate  from "../helpers/math";

function reducer(state, {type, payload}) {

    switch(type) {
        case ACTIONS.ADD_DIGIT: 
        if(payload.digit === "0" && state.currentOperand === "0") return state;
        if(payload.digit === "." && state.currentOperand.includes('.')) return state;
         return {
            ...state,
            currentOperand: `${state.currentOperand || ""}${payload.digit}`,
            prevOperand: `${state.prevOperand || ""}${payload.digit}`
           }
        case ACTIONS.REMOVE_DIGIT: 
        return {
            ...state, 
            currentOperand: `${state.currentOperand || ''}`
        }
     
        case ACTIONS.CHOSE_OPERATION: 
        if(state.currentOperand == null && state.prevOperand == null) {
            return state;
        }

        if(state.prevOperand == null) {
            return {
                ...state,
                operation: payload.op,
                prevOperand: state.currentOperand,
                currentOperand: null
            }
        }

        return {
          ...state,
          prevOperand: evaluate(state),
          operation: payload.op,
          currentOperand: null
         }

         case ACTIONS.CLEAR: 
         return {
            ...state,
            currentOperand: "",
            prevOperand: "",
            operation: ""
         };
    }

}

const Controls = () => {
    const [{currentOperand, prevOperand, operation}, dispatch] = useReducer(reducer, {});

    return (
        <>
        <TopScreen currentOperand={currentOperand} prevOperand={prevOperand} operation={operation} />
        <div className="calculator-buttons">
           <button className="button--op" onClick={() => dispatch({type: ACTIONS.CLEAR})}>C</button>
           <OpButton dispatch={dispatch} op="+/-" />
           <OpButton dispatch={dispatch} op="%" />
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
           <OpButton dispatch={dispatch} op="=" />
        </div>
        </>
    );
}

export default Controls;