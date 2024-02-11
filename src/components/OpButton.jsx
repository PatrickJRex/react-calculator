import { ACTIONS } from "../helpers/actions";

export default function OpButton({op, dispatch}) {
    return (
       <button value={op} className={`button--${op} button--op`} onClick={() => dispatch({type:ACTIONS.CHOSE_OPERATION, payload:{op}})}>
        {op}
        </button>
    );
}