import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

function ProductList({ products, onOpenModal }) {
  return (
    <section>
      {products.map(product => (
        <ProductItem key={product.product_id} product={product} onOpenModal={onOpenModal}/>
      ))}
    </section>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
      PropTypes.shape({
          product_id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.string.isRequired,
          discount: PropTypes.string,
          best_choice: PropTypes.bool,
          freight: PropTypes.string,
          image_url: PropTypes.string.isRequired
      })
  ).isRequired,
  onOpenModal: PropTypes.func,
};

export default ProductList;
