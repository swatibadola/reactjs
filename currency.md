# notes for currency convertor app

## API Link

```javascript
let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

```

## input box

```javascript
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",

}) {
    const amountInputId = useId() // Will give uniqe Ids

    return (
        <div style={`{ backgroundColor: "white", padding: 3, display: "flex" ${className}}`}>
            <div style={{ width: 1 / 2 }}>
                <label htmlFor={amountInputId} style={{ color: "black", marginBottom: 2, display: "inline-block" }}>
                    {label}
                </label>
                <input
                    id={amountInputId}
                    style={{
                        outline: 'none', width: 300, backgroundColor: "transparent", padding: 1.5,
                    }}
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                //IF THERE IS NO VALUE IN THE CURRENCY SO TO RECHECK IT WE USE &&
                //NUMBER - used to change the STR TO NUMBER VALUE
                />
            </div>
            <div style={{ width: 1 / 2, display: "flex", flexWrap: "wrap", justifyContent: "flex-end", textAlign: "right" }}>
                <p style={{ color: "black", marginBottom: 2, width: 300 }}>Currency Type</p>
                <select style={{ paddingRight: 1, paddingTop: 1, backgroundColor: "gray", cursor: "pointer", outline: "none" }}
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    //Here no need to change to NUMBER as we need the value in STR only
                    disabled={currencyDisable}
                >

                    {currencyOptions.map((currency) => {
                        // When LOOP is applied in a JSX file(REACT) we need to pass a KEY to IMPTOVE THE PERFORMANCE OF THE ELEMENTS IN THE LOOP
                        // REMEMBER KEY IN LOOPS IN REACT
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default InputBox;
```


## App.js