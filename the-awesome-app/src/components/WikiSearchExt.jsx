import React, {useEffect, useRef, useState } from 'react';
import axios from 'axios';


function WikiSearchExt() {

    //state called "searchKey" and a function to the update the state called "setSearchKey"
    const [searchKey, setSearchKey] = useState("");
    const [results, setResults] = useState([]);
    let count = useRef(0);
   
    function change(evt) {
        const value = evt.target.value;
        setSearchKey(value);
        
    }
    const search = async () => {

        count.current++;
        console.log("count: " + count.current);
        console.log("search...");
        //https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=20&search=react
        const url = "https://en.wikipedia.org/w/api.php";
        const params = {
            action: "opensearch",
            format: "json",
            limit: 20,
            origin: "*",
            search: searchKey
        };
        try {
            const resp = await axios.get(url, {params: params});
            console.log(resp.data);
            setResults(resp.data[1]);

        } catch (error) {
            alert("Failed to search")
        }
        

    }

    return (
        <div>
            <h4>Wiki Search </h4>
            <p>Count: {count.current}</p>
            <input className="form-control" type="search" value={searchKey} onChange={change} />
             &nbsp;
            <div>
                <button className="btn btn-success" onClick={search}>Search</button>
            </div>
            {searchKey ? <p>Searching for {searchKey}</p> : null}
           
            <div>
                {results.map((item, index) => {
                    return (
                        <p key={index}>{item}</p>
                    )
                })}
            </div>
        </div>
    );

}

export default WikiSearchExt;