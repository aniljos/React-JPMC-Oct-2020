import React, { Component } from 'react';
import axios from 'axios';


class ListProducts extends Component{

    state = {
        products: []
    }

    async componentDidMount(){

        const url = "http://localhost:9000/products";
        // axios
        //     .get(url)
        //     .then((resp) => {
        //         console.log("success", resp);

        //     }, (errResp) => {
        //         console.log("error", errResp);
        //     });

       
        //ES 7
        try {

            const resp = await axios.get(url);
            console.log("success", resp);
            this.setState({
                products: resp.data
            });
           
        } catch (errResp) {
            console.log("error", errResp);
        }
        
    }

    renderProducts(){
        return this.state.products.map((item, index) => {
            return (
                <div key={item.id}>
                    <p>Id: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Description: {item.description}</p>
                    <p>Price: {item.price}</p>
                </div>
            )
        })
    }

    render(){
        return (
            <div>
                <h2>List Products</h2>
                {this.renderProducts()}
            </div>
        )
    }
}

export default ListProducts;