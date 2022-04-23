import React, { useEffect, useState } from "react";

function Tracker() {
    const [ loading, setLoading ] = useState([]);
    const [ coins, setCoins ] = useState([]);

    useEffect (() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, [])

    return (
        <div>
            <h1>Coin Tracker</h1>
            {loading ? <strong>Loading...</strong> : null}
            <ul>
                {coins.map((coin) => <li key={coin.id}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price}</li>)}
            </ul>
        </div>
    );
}

export default Tracker;