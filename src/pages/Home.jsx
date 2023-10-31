import Gallery from "../components/Gallery";
import Header from "../components/Header";
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

export const ImagesContext = createContext(null);

function Home() {
  const [images, setImages] = useState([]);
  const [setectedImg, setSelectedImg] = useState([]);

  useEffect(() => {
    fetch("/images.json")
      .then(resp => resp.json())
      .then(data => setImages(data.images))
  }, []);

  const addNewImage = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.addEventListener('change', function(event) {
      const input = event.target;

      if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
          const img = e.target.result;
          setImages(prev => [...prev, img]);
        };

        reader.readAsDataURL(input.files[0]);
      }
    });
    fileInput.click();
  }

  const shared = {
    images,
    setImages,
    setectedImg,
    setSelectedImg,
    addNewImage
  }
  
  return (
    <div className="bg-slate-100 pb-10 min-h-screen">
      <ImagesContext.Provider value={shared}>
        <Header></Header>
        <Gallery></Gallery>
      </ImagesContext.Provider>
    </div>
  );
}

export default Home;