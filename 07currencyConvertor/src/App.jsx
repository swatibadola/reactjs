import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
// import './App.css'

function App() {

  // SETTING STATES
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)


  //USING HOOKS
  const currencyInfo = useCurrencyInfo(from)

  //TAKING KEYS FROM THE OBJECTS
  const options = Object.keys(currencyInfo)

  // SWAPPING TWO VARIABLES
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <div style={{ width: 350, height: 500, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', backgroundRepeat: 'no-repeat', backgroundImage: `url('https://i.pinimg.com/236x/1d/8e/80/1d8e80fee54f45001a617ddcc1e76121.jpg')` }}
    >
      <div style={{ width: 400 }}>
        <div style={{ width: 350, maxWidth: 448, marginLeft: 'auto', marginRight: 'auto', borderColor: 'gray', borderRadius: 8, padding: 5, backdropFilter: blur(4), backgroundColor: 'white' }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div style={{ width: 100, marginBottom: 1 }}>
              <InputBox
                label='From'
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div style={{ position: 'relative', width: 100, height: 0.5 }}>
              <button
                type='button'
                style={{ position: 'absolute', left: 0.5, translate: 0.125, border: 2, borderColor: 'white', borderRadius: 8, backgroundColor: 'blue', color: 'white', paddingRight: 2, paddingTop: 0.5 }}
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div style={{ width: 300, marginTop: 1, marginBottom: 4 }}
            >
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={from}
                amountDisable
                />

            </div>
            <button type='submit'
              style={{ width: 400, backgroundColor: 'blue', color: 'white', paddingRight: 4, paddingTop: 3, borderRadius: 8 }}>
              Convert 
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
