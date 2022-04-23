import React, { useEffect, useState } from "react";

const MtoH = ({minutes, onChange}) => {
    return (
        <>
            <div>
                <label htmlFor="minutes">Minutes</label>
                <input type="number" placeholder="Minutes" onChange={onChange} value={minutes}/>
            </div>
            <div>
                <label htmlFor="hours">Hours</label>
                <input type="number" placeholder="Hours" value={Math.round(minutes / 60)} disabled />
            </div>
        </>
    );
};

const HtoM = ({minutes, onChange}) => {

    useEffect(() => {
        console.log("HtoM Created");
        return () => console.log("HtoM Destroyed");
    }, [])

    return (
        <>
            <div>
                <label htmlFor="hours">Hours</label>
                <input type="number" placeholder="Hours" onChange={onChange} value={minutes}/>
            </div>
            <div>
                <label htmlFor="minutes">Minutes</label>
                <input type="number" placeholder="Minutes" value={Math.round(minutes * 60)}  disabled/>
            </div>
        </>
    );
};

function App() {
    const [ minutes, setMinutes ] = useState(0);
    const [ flipped, setFlipped ] = useState(false);

    const onChange = (event) => {
        setMinutes(event.target.value);
    };

    const onFlip = () => {
        setFlipped((current) => !current);
        onReset();
    }
    
    const onReset = () => {
        setMinutes(0);
    }

    return (
        <>
            {flipped === false ? <MtoH minutes={minutes} onChange={onChange} /> : <HtoM minutes={minutes} onChange={onChange} />}
            <input type="button" value="Reset" onClick={onReset} />
            <input type="button" value="Flip" onClick={onFlip} />
        </>
    );
};

export default App;