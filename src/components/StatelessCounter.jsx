const StatelessCounter = ({ handleMinus, handlePlus, count}) => (
    <div>
        <button onClick={handleMinus}>-</button>
            <p>{count}</p>
        <button onClick={handlePlus}>+</button>
    </div>
);

export default StatelessCounter;
