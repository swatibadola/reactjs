import { useEffect, useState } from "react";
// useEffect - lets the component to connect and synchronize with external system. HERE, used to fetch api.


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json)    //Converting data to json 
        .then((res) => setData(res[currency]))
    }, [currency])
    // console.log(data);
    return data
}

export default useCurrencyInfo;