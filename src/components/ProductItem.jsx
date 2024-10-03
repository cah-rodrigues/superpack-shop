import React from "react";
import PropTypes from "prop-types";

const ProductItem = ({ product, onOpenModal }) => {
    return (
        <div>
            <img src={product.image_url} alt={product.name} />
            <p>{product.name}</p>
            <p>R$ {product.price}</p>
            {product.discount && <p>Desconto: R$ {product.discount}</p>}
            {product.best_choice && <p>Melhor escolha!</p>}
            <p>{product.freight}</p>
            <button onClick={() => onOpenModal(product)}>Comprar</button>
        </div>
    );
};

ProductItem.propTypes = {
    product: PropTypes.shape({
        product_id: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        discount: PropTypes.string,
        best_choice: PropTypes.bool,
        freight: PropTypes.string,
    }).isRequired,
    onOpenModal: PropTypes.func.isRequired,
};

export default ProductItem;
