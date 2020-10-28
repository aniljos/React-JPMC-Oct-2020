import React, { useState } from 'react';


function WikiSearch(){

    //state called "searchKey" and a function to the update the state called "setSearchKey"
    const [searchKey, setSearchKey] = useState("");

    function change(evt){
        const value = evt.target.value;
        setSearchKey(value);
    }
    return (
        <div>

            <input className="form-control" type="search" value={searchKey} onChange={change}/>
            
            <button className="btn btn-success">Search</button>

            {searchKey? <p>Searching for {searchKey}</p> : null}

        </div>
    );

}

export default WikiSearch;