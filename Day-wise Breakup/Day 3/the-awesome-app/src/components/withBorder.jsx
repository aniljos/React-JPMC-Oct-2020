import React from 'react';


//HOC is a function thats would the receive the 
//                          component to wrap(to apply the border)

const withBorder = (Component) => {

    //return a new component(class/functional) which wrap the recevied component
    return (props) => {
        return (
            <div style={{border: "2px solid blue", margin: "7px", padding: "35px"}}>
                <Component {...props}/>
            </div>
        );

    }
}


export default withBorder;