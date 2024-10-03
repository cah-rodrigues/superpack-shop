import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Modal.css'

const Modal = ({ onClose, product }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        street_number: '',
        street: '',
        district: '',
        city: '',
        state: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...formData, product_id: product.product_id }),
        });

        if (response.ok) {
            alert('Obrigado pela preferencia!');
            onClose();
        } else {
            alert('Erro ao realizar a compra. Tente novamente.');
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Preencha seus dados para a compra</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Nome" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    <input type="tel" name="phone_number" placeholder="Telefone" onChange={handleChange} required />
                    <input type="text" name="street_number" placeholder="Número" onChange={handleChange} required />
                    <input type="text" name="street" placeholder="Rua" onChange={handleChange} required />
                    <input type="text" name="district" placeholder="Bairro" onChange={handleChange} required />
                    <input type="text" name="city" placeholder="Cidade" onChange={handleChange} required />
                    <input type="text" name="state" placeholder="Estado" onChange={handleChange} required />
                    <button type="submit">Confirmar</button>
                </form>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
};

export default Modal;
