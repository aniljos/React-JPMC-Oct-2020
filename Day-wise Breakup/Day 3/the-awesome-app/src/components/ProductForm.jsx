import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class ProductForm extends Component{


    state = {
        currentProduct: null,
    }
    constructor(props){
        super(props);

        this.state.currentProduct = this.props.product;
    }
    // static getDerivedStateFromProps(nextProps, currentState){

    //     //check if the props has changes
    //     if(nextProps.product.id !== currentState.currentProduct.id){

    //         //return new State
    //         return {
    //             currentProduct: nextProps.product,
    //         }
    //     }
    //     else{
    //         //return no state update
    //         return null;
    //     }
    // }

    change = (evt) => {

        const value = evt.target.value;
        const product = {...this.state.currentProduct};
        const propName = evt.target.name;
        product[propName] = value;
        this.setState({
            currentProduct: product
        });
    }
    changePrice = (evt) => {

        const value = evt.target.value;
        const product = {...this.state.currentProduct};
        product.price = parseFloat(value);
        this.setState({
            currentProduct: product
        });
    }

    save = ()=> {

        if(this.props.onSave){
            this.props.onSave(this.state.currentProduct);
        }
    }
    cancel = () => {
        
        if(this.props.onCancel){
            this.props.onCancel();
        }
    }

    render(){

        //Object Destructuring
        const {currentProduct} = this.state;
        //const currentProduct = this.state.currentProduct;

        return (
            <div>
                <h4>Edit Product: {currentProduct.id}</h4>
                <fieldset>
                    <p>Name</p>
                    <div>
                        <input className="form-control" name="name"
                                value={currentProduct.name} onChange={this.change}/>
                    </div>

                    <p>Desc</p>
                    <div>
                        <input className="form-control" name="description"
                            value={currentProduct.description} onChange={this.change}/>
                    </div>

                    <p>Price</p>
                    <div>
                        <input className="form-control" name="price" onChange={this.changePrice}
                                type="number" value={currentProduct.price}/>
                    </div>

                    <div>
                        <button className="btn btn-success" onClick={this.save}>Save</button>
                        &nbsp;
                        <button className="btn btn-warning" onClick={this.cancel}>Cancel</button>
                    </div>
                </fieldset>
                <br/>
                <br/>
                <br/>

            </div>
            
        )
    }
}


export default withRouter(ProductForm);