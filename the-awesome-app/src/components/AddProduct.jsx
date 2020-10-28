import React, { Component } from 'react';
import axios from 'axios';

class AddProduct extends Component{

    save = async () => {

        const product = {
            id: parseInt( this.idRef.value),
            name: this.nameRef.value,
            desc: this.descRef.value,
            price: parseFloat(this.priceRef.value),
        }
        const url = "http://localhost:9000/products";

        try {
            const resp = await axios.post(url, product)
            alert("Saved...");
            this.idRef.value = "";
            this.nameRef.value="";
            this.descRef.value = "";
            this.priceRef.value = ""
        } catch (error) {
            alert("Failed to save...");
        }

    }

    render(){
        return (
            <div>
                <h2>Add New Product</h2>
                <div>
                    <p>Id</p>
                    <div>
                        <input type="number" ref={ref=> this.idRef=ref}/>
                    </div>
                    <p>Name</p>
                    <div>
                        <input ref={ref=> this.nameRef=ref}/>
                    </div>
                    <p>Description</p>
                    <div>
                        <input ref={ref=> this.descRef=ref}/>
                    </div>
                    <p>Price</p>
                    <div>
                        <input type="number" ref={ref=> this.priceRef=ref}/>
                    </div>
                    <div>
                        <button onClick={this.save}>Save</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default AddProduct;