import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(9)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef HOOK
  const passwordRef = useRef(null)

  //PASSWORD GENERATOR - Definition of passwordGenerator
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*(){}[]/*-+?|_=~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1) //index value of an array is generated, not the charachter
      pass += str.charAt(char) //To get charachter from a string

    }
    setPassword(pass)

  }, [length, charAllowed, numAllowed, setPassword //setPassword used for optimization and memoization of the function (Keeps in cache) only. Using password will create an infinite loop
  ])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); //To select the text when it is copied to the clipboard. ? is used for optional
    passwordRef.current?.setSelectionRange(0, 6);
    window.navigator.clipboard.writeText(password)
  }, [password])

  //RUNNING the passwordGenerator
  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>

      <div className="mx-auto w-full max-w-7xl" style={{ backgroundColor: 'darkgray', color: 'yellow', padding: 6, width: 500, fontSize: 25, fontWeight: 500, margin: 10, borderRadius: 15 }}>
        <h1 style={{ color: 'darkblue', textAlign: 'center', fontSize: 25 }}>Password Generator</h1>
        <div style={{ display: 'flex', marginBottom: 10 }}>
          <input
            type="text"
            value={password}
            className='ouline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
            style={{ width: 360, borderRadius: 12, overflow: 'hidden', border: 'white', padding: 5, paddingLeft: 10, marginLeft: 25, fontSize: 16 }}
          />
          <button onClick={copyPasswordToClipboard}
           style={{ outline: 'none', backgroundColor: 'darkblue', color: 'white', padding: 3, flexShrink: 0 }}
           >Copy</button>
        </div>

        <div style={{ display: 'flex', gap: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              style={{ cursor: 'pointer', marginLeft: 25 }}
              onChange={(e) => { setLength(e.target.value) }} //So that the value changes in the bar range when it slides 
            />
            <label style={{ fontSize: 18, color: 'darkblue' }}>Length:{length}</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id='numberInput'
              style={{ cursor: 'pointer', marginLeft: 15 }}
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label style={{ fontSize: 18, color: 'darkblue' }}>Number{numAllowed}</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charachterInput'
              style={{ cursor: 'pointer', marginLeft: 15 }}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label style={{ fontSize: 18, color: 'darkblue' }}>Charachter{charAllowed}</label>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
