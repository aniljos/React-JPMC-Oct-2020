import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './ListProducts.css';
import ProductForm from './ProductForm';

const url = "http://localhost:9000/products";
function ListProducts() {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null)
    useEffect(() => {

        (async () => {

            const resp = await axios.get(url);
            setProducts(resp.data);

        })();

    }, [])

    const deleteProduct = async (productId, index) => {

        try {
            
            const resp = await axios.delete(url + "/" + productId);
            //copy of the products
            // const updatedProducts = [...this.state.products];
            // updatedProducts.splice(index, 1);

            const fetchResp = await axios.get(url);
            const updatedProducts = fetchResp.data;

            setProducts(updatedProducts);

            //alert("Deleted...")

        } catch (error) {
            console.log(error);
            alert("Failed to delete..")
        }

    }
    const editProduct = (item) => {
        
        setSelectedProduct(item);
    }

    const editUpdate = async (product) => {

        try {
            
            const resp =  await axios.put(url + "/" + product.id, product);
            const fetchResp = await axios.get(url);
            setProducts(fetchResp.data);
            

        } catch (error) {
            console.log(error);
        }
    }

    const editCancel = () => {
        setSelectedProduct(null);
    }

    function renderProducts() {
        return products.map((item, index) => {
            return (
                <div key={item.id} className="product">
                    <p>Id: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Desc: {item.description}</p>
                    <p>Price: {item.price}</p>
                    <div>
                        <button className="btn btn-danger"
                            onClick={() => { deleteProduct(item.id, index) }}>Delete</button>

                    &nbsp;
                        <button className="btn btn-primary" 
                                    onClick={() => editProduct(item)}>Edit</button>
                    </div>
                </div>
            )

        });
    }
    return (
        <div>
            <h2>List Products</h2>
            <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                {renderProducts()}
            </div>
            <div>
                    {selectedProduct !== null ? 
                                <ProductForm 
                                    key={selectedProduct.id} 
                                    product={selectedProduct}
                                    onSave={editUpdate}
                                    onCancel={editCancel}
                                    /> : null}
                </div>
        </div>
    );


}

export default ListProducts;