const TopScreen = ({currentOperand, prevOperand, operation}) => {
    return (
        <>
        <div className="calculator-top-screen">
        {/* <section className="calculation">
        <input type="text" name="firstInput" id="firstInput" className="calculator-first-input" value={currentOperand} />
         <span className="operation">{operation}</span>
         <input type="text" name="secondInput" id="secondInput" className="calculator-second-input" value={prevOperand} />
        </section> */}
         <input type="text" name="output" className="output" value={currentOperand} id="output" />
        </div>
        </>
    );
};

export default TopScreen;