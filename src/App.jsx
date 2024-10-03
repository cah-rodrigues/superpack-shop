import { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video';
import ProductList from './components/ProductList';
import Modal from './components/Modal'; // Modal importado
import { getData } from './services/Api';

function App() {
  const [video, setVideo] = useState({});
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { video, products } = await getData();
      setVideo(video);
      setProducts(products);
    }

    fetchData();
  }, []);

  const onOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      {video.headline ? (
        <Video 
          url={video.url || 'https://www.youtube.com/embed/T5W3TJtYa2E'} 
          headline={video.headline} 
          subheadline={video.subheadline || ''} 
        />
      ) : (
        <p>Carregando o vídeo...</p>  // Renderiza algo até os dados chegarem
      )}
      <ProductList products={products} onOpenModal={onOpenModal} />
    </div>
  );
}

export default App;
