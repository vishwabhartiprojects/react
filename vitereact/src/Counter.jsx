
import { useState } from 'react';


function Counter(){
    let [counter, setCounter] = useState(1);

    const addValue = () =>{
      counter = counter + 1;
      setCounter(counter);
      console.log(counter);
    };
    const removeValue = ()=>{
      counter = counter -1;
      setCounter(counter);
    }
  
    return(
        <>
            <h2 className='border bg-orange-300 text-black rounded-xl p-2 block'>Counter</h2>
            <button onClick={removeValue}>-</button>
            <span className='m-3 border p-3 rounded-xl'> {counter}</span>
            <button onClick={addValue}>+</button>
        </>
    )
}
export default Counter;