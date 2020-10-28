import React, {useEffect, useState } from 'react';
import axios from 'axios';



function WikiSearch() {

    //state called "searchKey" and a function to the update the state called "setSearchKey"
    const [searchKey, setSearchKey] = useState(() => {

        const value = window.localStorage.getItem("searchKey");
        if(value){
            return value;
        }
        else{
            return "";
        }
    });
    const [results, setResults] = useState([]);

    //useEffect(callback, [dependencies])
    useEffect(() => {
        console.log("useEffect like the componentDidMount(there are no dependencies)");

        //return a callback(this callback acts the componentWillUnmount)
        return ()=> {
            console.log("useEffect callback(this callback acts the componentWillUnmount)");
        }
    }, []);

    useEffect(() => {
        console.log("useEffect like the componentDidUpdate(there is a dependencies to searchKey)");

        window.localStorage.setItem("searchKey", searchKey);

    }, [searchKey]);

    useEffect(() => {
        console.log("useEffect like the componentDidUpdate(there is a dependencies to results)");
    }, [results]);

    useEffect(() => {
        console.log("useEffect like the componentDidUpdate(there is a dependencies to searchKey, results)");
    }, [searchKey, results]);

    // useEffect(()=> {
    //     console.log("useEffect")

    // })
    function change(evt) {
        const value = evt.target.value;
        setSearchKey(value);
        
    }
    const search = async () => {
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

export default WikiSearch;