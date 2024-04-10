//CREATING A CUSTOM HOOK

import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({}) //HOLDING THE DATA
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`) //Fetching the currency API
        .then((res) => res.json())  //Converting the data from the above API which is in STRING format to JSON.
        .then(() => setData(res[currency])) //[currency] - TO ACCESS AN OBJECT WE CAN ALSO USE [] INSTEAD OF .

        console.log(data);
    }, [currency])

    console.log(data);
    return data
}

export default useCurrencyInfo;