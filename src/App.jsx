import { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video';
import ProductList from './components/ProductList';
import { getData } from './services/Api';

function App() {
  const [video, setVideo] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { video, products } = await getData();
      setVideo(video);
      setProducts(products);
    }

    fetchData();
  }, []);

  return (
    <div>
      {video.url && video.headline && (
        <Video 
          url={video.url} 
          headline={video.headline} 
          subheadline={video.subheadline} 
        />
      )}
      <ProductList products={products} />
    </div>
  );
}

export default App;
