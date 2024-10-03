import React from "react";
import ProductItem from "./ProductItem";
import PropTypes from "prop-types";


const ProductList = ({ products, onOpenModal }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.product_id}
          product={product}
          onOpenModal={onOpenModal}
        />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ProductList;