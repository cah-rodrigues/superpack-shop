import PropTypes from "prop-types";
import './ProductItem.css'

const ProductItem = ({ product, onSelect }) => {
    return (
        <div className="item">
            <img src={product.image_url} alt={product.name} />
            <div className="content"> 
                <p className="name">{product.name}</p>
                <p className="price">R$ {product.price}</p>
                {product.discount && <p className="discount">Desconto: R$ {product.discount}</p>}
                {product.best_choice && <p className="choice">Melhor escolha!</p>}
                <p className="freight">{product.freight}</p>
            </div>
            <button onClick={() => onSelect(product)}>Comprar</button>
        </div>
    );
};

ProductItem.propTypes = {
    product: PropTypes.shape({
        product_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        image_url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
        best_choice: PropTypes.bool,
        freight: PropTypes.string,
    }).isRequired,
    onSelect: PropTypes.func.isRequired
};


export default ProductItem