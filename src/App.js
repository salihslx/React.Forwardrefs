
import { useRef } from 'react';
import './App.css'
import BasicInput from './ui/basicInput';


function App() {
  
    const inputRef = useRef()

    const handeDisplayInputValue = () => {
        alert(`The input stores : ${inputRef.current.value}`)
    }



    return (
        <div className='App'>
            <BasicInput
            ref={inputRef}
            type="text"
            placeholder="enter some text"
            />
            <button onClick={handeDisplayInputValue}>click</button>

        </div>
 


    );

}

export default App;
