import ImageBox from "./ImageBox";
import AddImage from "./AddImage";
import { useContext } from "react";
import { ImagesContext } from "../pages/Home";


function Gallery() {
  const { images } = useContext(ImagesContext);

  return (
    <div>
      <div className="container mx-auto p-2 md:p-10 bg-white rounded-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {
            images?.map((image, i) => <ImageBox key={i} image={image} isFeatured={i == 0}></ImageBox>)
          }
          <AddImage></AddImage>
        </div>
      </div>
    </div>
  );
}

export default Gallery;