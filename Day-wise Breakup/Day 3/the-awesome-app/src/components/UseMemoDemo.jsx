import React, { useState, useMemo} from 'react';

const UseMemoDemo = () => {

    
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Anil');
    //const computeData = useRef(null);
    //time-consuming
    const parseData = (data) => {

        console.log("parsing data");
        for (let i = 0; i < 2000000000; i++);
        console.log("parsing data over");
        if(data){
            return "Hello " + data;
        }
        else{
            return "";
        }
        
    }
    const computedData = useMemo(() => parseData(name), [name]);


    return (
        <div>
            <h2>Use Memo Demo</h2>
            <h4>Count: {count}</h4>
            <div>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
            <div>
                <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <p>
                {/* {parseData(name)} */}
                {computedData}
            </p>
        </div>
    );
}

export default UseMemoDemo;