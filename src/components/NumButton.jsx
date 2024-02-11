import { ACTIONS } from "../helpers/actions";

export default function NumButton({digit, dispatch}) {
    return (
    <button value={digit} onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})} className={`button--${digit}`}> 
        {digit} 
    </button>
    );
}