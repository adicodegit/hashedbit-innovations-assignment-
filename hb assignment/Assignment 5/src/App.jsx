import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const result = useRef(null);
  const inputRef = useRef(null);

  const handleChange = (e) => { 
    try {
      result.current.value = eval(e.target.value) ?? '0';
    } catch {
      result.current.value = '';
    }
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    setInput(input + ` ${e.target.value} `);
    inputRef.current.focus();
  }



  return (

    <>
      <div className='calculator'>
        <div className='input-container'>
          <input ref={inputRef} type='text'  value={input} onChange={handleChange} />
        </div>
        <div className='control-container'>
          <button className='control' value={'+'} onClick={handleClick}>+</button>
          <button className='control' value={'-'} onClick={handleClick}>-</button>
          <button className='control' value={'*'} onClick={handleClick}>x</button>
          <button className='control' value={'/'} onClick={handleClick}>/</button>
        </div>
        <div className='input-container'>
          <input ref={result} type='text' />
        </div>
      </div>
    </>
  )
}

export default App
