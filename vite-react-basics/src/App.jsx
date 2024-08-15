import { useCallback, useState } from 'react';

function App() {
  const [color, setColor] = useState("#FFD700");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+}{~`;[]";
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: color }} className="duration-200 flex items-center justify-end">
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600 text-center'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            copy</button>
        </div>
        <button
          onClick={passwordGenerator}
          className='outline-none px-4 py-2 rounded-full text-white shadow-lg bg-blue-500'
        >
          Generate Password
        </button>
        <div className='flex text-sm gap-x-2'></div>
        <div className='flex items-center gap-x-1'>
          <input
          type="range"
          min={6}
          max={99}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}

          
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{
            setNumberAllowed((prev)=>!prev);
          }}
          />
          <label htmlFor='numberInput'>Number</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={()=>{
            setCharAllowed((prev)=>!prev);
          }}
          />
          <label htmlFor='characterInput'>Special Characters</label>
        </div>

      </div>
      <div className='fixed flex flex-col right-0 top-1/2 transform -translate-y-1/2 px-2'>
        <div className='flex flex-col gap-3 shadow-lg bg-white px-4 py-2 rounded-2xl'>
          <button
            onClick={() => setColor("red")}
            className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("olive")}
            className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("white")}
            className='outline-none px-4 py-2 rounded-full text-black shadow-3xl'
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={() => setColor("black")}
            className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
