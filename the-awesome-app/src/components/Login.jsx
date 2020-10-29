import Axios from 'axios';
import React, { useRef, useState } from 'react';
import Counter from './Counter';
import Input from './Input';
import axios from 'axios';
import {connect} from 'react-redux';

function Login(props){

    const [password, setPassword] = useState("");
    const nameRef= useRef(null);
    const pwdRef = useRef(null);
  

    async function login(){
        console.log(nameRef.current.value, pwdRef.current.value, password);

        const url = process.env.REACT_APP_BASE_URL + "/login";
        try {

            const resp = await axios.post(url, {name: nameRef.current.value, password: password});
            console.log("Success", resp);
            props.setAuthenticated({
                accessToken: resp.data.accessToken,
                refreshToken: resp.data.refreshToken
            });
            props.history.push("/shopping");

        } catch (error) {
            console.log("Error", error);
            alert("Failed");
        }
        
        
    }
    return (
        <div>
            
            <Input label="Name" type="text" ref={nameRef}/>
            <Input label="Password" type="password" 
                ref={pwdRef} value={password} onChange={evt => setPassword(evt.target.value)}/>
        
            <div>
                <button onClick={login}>Login</button>
            </div>
        </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {

        setAuthenticated: (obj)=> {dispatch({type:"SET_AUTH", data: obj})}
    }
}

export default connect(null, mapDispatchToProps)(Login);