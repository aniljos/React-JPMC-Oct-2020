import React, { useState, useCallback } from 'react';

//React.memo(16.3) => component is updated only if the props or the state changes
const Simple = React.memo((props) => {
    console.log("executing simple..");
    return (
        <div>
            <h4>Simple</h4>
            <p>Value: {props.value}</p>
            <div>
                <button onClick={props.onProcess}>Process</button>
            </div>
        </div>
    );
});


const UseCallbackDemo = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const execute = useCallback(() => {
        alert("This name is " + name);
    }, [name]);

    return (
        <div>
            <h3>UseCallback Demo</h3>

            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
            <div>
                <input placeholder="Name" value={name} onChange={(evt) => setName(evt.target.value)} />
            </div>

            <Simple value={name} onProcess={execute} />

        </div>
    )
}

export default React.memo(UseCallbackDemo);