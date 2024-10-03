import React, { useEffect, useState } from "react";
import Video from './Video';
import ProductList from './ProductList';
import Modal from "./Modal";
import { getData } from '../services/Api';

const HomePage = () => {
    const [video, setVideo] = useState({});
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const { video, products } = await getData();
            setVideo(video);
            setProducts(products);
        }
        fetchData();
    }, []);

    const handleOpenModal = (product) => {
        setSelectedProduct(product)
        setIsModalOpen(true)
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const handleSubmit = async (formData, product_id) => {
        const response = await fetch ("API_ENDPOINT", {
            method: "POST",
            headers: {
                "Content-Type": "aplication/json",
            },
            body: JSON.stringify({ ...formData, product_id}),
        });

        if (response.ok) {
            setSuccess(true);
            setIsModalOpen(false);
        } else {
            console.error("Epa! algo deu errado... Por favor, tente tovamente.");
        }
    };

    return (
        <div>
            {success ? (
            <div>
                <h1>Obrigado por sua compra!</h1>
            </div>
        ) : (
            <>
                <Video
                    url={video.url}
                    headline={video.headline}
                    subheadline={video.subheadline}
                />
                <ProductList
                    products={products}
                    onOpenModal={handleOpenModal}
                />
                {isModalOpen && (
                    <Modal
                        product={selectedProduct}
                        onClose={handleCloseModal}
                        onSubmit={handleSubmit}
                    />
                )}
            </>
        )}
    </div> 
 );
};

export default HomePage;
