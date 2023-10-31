import ImageBox from "./ImageBox";
import AddImage from "./AddImage";
import { useContext } from "react";
import { ImagesContext } from "../pages/Home";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function Gallery() {
  const { images, setImages } = useContext(ImagesContext);

  const moveImage = (fromIndex, toIndex) => {
    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setImages(updatedImages);
  };

  return (
    <div>
      <div className="container mx-auto p-2 md:p-10 bg-white rounded-xl">
        <DndProvider backend={HTML5Backend}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {
              images?.map((image, i) => <ImageBox key={i} image={image} index={i} moveImage={moveImage} isFeatured={i == 0}></ImageBox>)
            }
            <AddImage></AddImage>
          </div>
        </DndProvider>
      </div>
    </div>
  );
}

export default Gallery;