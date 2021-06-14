/*
    A Stateless Component is just a plain javascript function
    which takes props as an argument and returns a react element
*/
const StatelessCounter = ({ handleMinus, handlePlus, count}) => (
    <div>
        <button onClick={handleMinus}>-</button>
            <p>{count}</p>
        <button onClick={handlePlus}>+</button>
    </div>
);

export default StatelessCounter;
