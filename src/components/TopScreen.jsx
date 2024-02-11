const TopScreen = ({currentOperand, prevOperand, operation}) => {
    return (
        <>
        <div className="calculator-top-screen">
        {/* TODO Render current and previous inputs 
            DO NOT USE INPUTS HERE LOL
        */}
        <div className="calculator-prevOperand">{prevOperand} <span>{operation}</span></div>
        <div className="calculator-currentOperand">{currentOperand}</div>
        </div>
        </>
    );
};

export default TopScreen;