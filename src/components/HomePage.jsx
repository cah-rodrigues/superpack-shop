import React, { useEffect, useState } from "react";
import Video from './Video';
import ProductList from './ProductList';
import Modal from './Modal';
import { getData } from '../services/Api';

const HomePage = () => {
    const [video, setVideo] = useState({ 
        headline: '', 
        subheadline: '', 
        url: '' 
    });
    const [products, setProducts] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setVideo(data.video);
            setProducts(data.products);
        };
        fetchData();
    }, []);

    const openModal = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div>
            <Video 
                url={video.url} 
                headline={video.headline} 
                subheadline={video.subheadline} 
            />
            <ProductList products={products} onOpenModal={openModal} />
            {isModalOpen && <Modal onClose={closeModal} product={selectedProduct} />}
        </div>
    );
};

export default HomePage;
