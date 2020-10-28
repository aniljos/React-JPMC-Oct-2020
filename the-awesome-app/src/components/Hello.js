import React from 'react';

//functional component
function Hello(props){


    var jsx = (
        <div>This is a JSX expression</div>
    )

    //return the View(JSX)
    return (
        <div>
            <h4>Hello React</h4>
            <p>{props.message}</p>
            <p>Generated Date: {new Date().toDateString() + "---" + new Date().toTimeString()}</p>
            <div>
                {jsx}
            </div>
            
        </div>
    )
}

export default Hello;


