import React, { Component, PureComponent } from 'react';
import axios from 'axios';
import './ListProducts.css';
import ProductForm from './ProductForm';
import { Link } from 'react-router-dom';


class ListProducts extends PureComponent{

    state = {
        products: [],
        selectedProduct: null
    }
    count = 0;

    constructor(props){
        super(props);

        this.url = "http://localhost:9000/products";
        console.log("[ListProducts] constructor");
    }
    async componentDidMount(){

        console.log("[ListProducts] componentDidMount");
        //const url = "http://localhost:9000/products";
        // axios
        //     .get(url)
        //     .then((resp) => {
        //         console.log("success", resp);

        //     }, (errResp) => {
        //         console.log("error", errResp);
        //     });

       
        //ES 7
        try {

            const resp = await axios.get(this.url);
            console.log("success", resp);
            this.setState({
                products: resp.data
            });
           
        } catch (errResp) {
            console.log("error", errResp);
        }
        
    }

    deleteProduct = async (productId, index) => {

        try {
            
            const resp = await axios.delete(this.url + "/" + productId);
            //copy of the products
            // const updatedProducts = [...this.state.products];
            // updatedProducts.splice(index, 1);

            const fetchResp = await axios.get(this.url);
            const updatedProducts = fetchResp.data;

            this.setState({
                products: updatedProducts
            });

            alert("Deleted...")

        } catch (error) {
            alert("Failed to delete..")
        }

    }

    editProduct = (item) => {
        this.count++;
        console.log("Count: ", this.count);
        this.setState({
            selectedProduct: item
        });
    }

    editUpdate = async (product) => {

        try {
            
            const resp =  await axios.put(this.url + "/" + product.id, product);
            const fetchResp = await axios.get(this.url);
            this.setState({
                products: fetchResp.data
            });
            alert("Updated")

        } catch (error) {
            alert("Failed to Update")
        }
    }

    editCancel = () => {
        this.setState({
            selectedProduct: null
        });
    }

    renderProducts(){
        return this.state.products.map((item, index) => {
            return (
                <div className="product" key={item.id}>
                    <p>Id: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Description: {item.description}</p>
                    <p>Price: {item.price}</p>
                    <div>
                        <button className="btn btn-danger" 
                                    onClick={() => {this.deleteProduct(item.id, index)}}>Delete</button>
                        &nbsp;
                        <button className="btn btn-primary" 
                                    onClick={() => this.editProduct(item)}>Edit</button>
                    </div>
                </div>
            )
        })
    }

    render(){
        console.log("[ListProducts] render");
        return (
            <div>
                <h2>List Products</h2>
                <p>
                    <Link to="/addProduct">New Product</Link>
                </p>
                <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                    {this.renderProducts()}
                </div>

                <div>
                    {this.state.selectedProduct !== null ? 
                                <ProductForm 
                                    key={this.state.selectedProduct.id} 
                                    product={this.state.selectedProduct}
                                    onSave={this.editUpdate}
                                    onCancel={this.editCancel}
                                    /> : null}
                </div>
            </div>
        )
    }

    componentWillMount(){
        console.log("[ListProducts] componentWillMount");
    }
    componentWillReceiveProps(){
        console.log("[ListProducts] componentWillReceiveProps");
    }
    // shouldComponentUpdate(){
    //     console.log("[ListProducts] shouldComponentUpdate");
    //     return true;
    // }
    componentWillUpdate(){
        console.log("[ListProducts] componentWillUpdate");
    }
    componentDidUpdate(){
        console.log("[ListProducts] componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("[ListProducts] componentWillUnmount");
    }
}

export default ListProducts;