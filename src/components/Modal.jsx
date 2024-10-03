import React, { useState } from "react";
import PropTypes from "prop-types";


const Modal = ({ product, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    street_number: "",
    street: "",
    district: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData, product.product_id);
  };

  return (
    <div className="modal">
      <h2>Compra do produto: {product.name}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nome" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="text" name="phone_number" placeholder="Telefone" onChange={handleChange} required />
        <input type="text" name="street_number" placeholder="Número" onChange={handleChange} required />
        <input type="text" name="street" placeholder="Rua" onChange={handleChange} required />
        <input type="text" name="district" placeholder="Bairro" onChange={handleChange} required />
        <input type="text" name="city" placeholder="Cidade" onChange={handleChange} required />
        <input type="text" name="state" placeholder="Estado" onChange={handleChange} required />
        <button type="submit">Confirmar</button>
      </form>
      <button onClick={onClose}>Fechar</button>
    </div>
  );
};

Modal.propTypes = {
  product: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Modal;
