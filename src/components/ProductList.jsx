import { useState } from 'react';
import ProductItem from "./ProductItem";
import Modal from './Modal'
import PropTypes from "prop-types";
import './ProductList.css';


const ProductList = ({ products }) => {
  const [openModal, setOpenModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({})
  
  const handleSelectProduct = (product) => {
    setOpenModal(true)
    setSelectedProduct(product)
  }

  const handleSubmit = async (product, productId) => {
    await fetch(`https://api-candidate.ogruposix.com/buy/${productId}`, {
      headers: {'user-token': '2A50C22E-7954-4C73-9CF9-F6D298C047A7'},
      method: 'POST',
      body: {
        name: product.name,
        email: product.email,
        phone_number: product.phone_number,
        street_number: product.street_number,
        street: product.street,
        district: product.district,
        city: product.city,
        state: product.state,
        product_id: productId,
      }
    })
    setOpenModal(false)
  };
  
  return (
    <div> 
      <h2 className="products-title">Nossos Produtos</h2>
      <div className="list">
        {products.map((product) => (
          <ProductItem
            key={product.product_id}
            product={product}
            onSelect={handleSelectProduct}
          />
        ))}
      </div>
      <Modal
          product={selectedProduct}
          onSubmit={handleSubmit}
          modalIsOpen={openModal}
          handleCloseModal={() => setOpenModal(false)}
        />
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList;