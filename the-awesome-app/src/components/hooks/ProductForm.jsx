import React, { useEffect, useState } from 'react'


function ProductForm(props){

    const [currentProduct, setCurrentProduct] = useState({});

    useEffect(() => {
        setCurrentProduct(props.product);
    }, [])


    const changeName = (evt) => {

        const value = evt.target.value;
        const product = {...currentProduct};
        product.name = value;
        setCurrentProduct(product);
    }
    const changeDesc = (evt) => {

        const value = evt.target.value;
        const product = {...currentProduct};
        product.description = value;
        setCurrentProduct(product);
    }
    const changePrice = (evt) => {

        const value = evt.target.value;
        const product = {...currentProduct};
        product.price = parseFloat(value);
        setCurrentProduct(product);
    }
    const save = ()=> {

        if(props.onSave){
            props.onSave(currentProduct);
        }
    }
    const cancel = () => {
        
        if(props.onCancel){
            props.onCancel();
        }
    }
    return (
        <div>
                <h4>Edit Product: {currentProduct.id}</h4>
                <fieldset>
                    <p>Name</p>
                    <div>
                        <input className="form-control" name="name"
                                value={currentProduct.name} onChange={changeName}/>
                    </div>

                    <p>Desc</p>
                    <div>
                        <input className="form-control" name="description"
                            value={currentProduct.description} onChange={changeDesc}/>
                    </div>

                    <p>Price</p>
                    <div>
                        <input className="form-control" name="price" onChange={changePrice}
                                type="number" value={currentProduct.price}/>
                    </div>

                    <div>
                        <button className="btn btn-success" onClick={save}>Save</button>
                        &nbsp;
                        <button className="btn btn-warning" onClick={cancel}>Cancel</button>
                    </div>
                </fieldset>
                <br/>
                <br/>
                <br/>

            </div>
    );
}

export default ProductForm;