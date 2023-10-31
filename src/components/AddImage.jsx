import { useContext } from 'react';
import { BiSolidImageAdd } from 'react-icons/bi';
import { ImagesContext } from '../pages/Home';

function AddImage() {
  const {addNewImage} = useContext(ImagesContext);

  return (
    <div onClick={addNewImage} className="flex flex-col transition-all duration-500 hover:text-accent hover:border-accent items-center justify-center gap-3 border-dashed border-2 rounded-md w-full h-72">
      <BiSolidImageAdd className="text-2xl"></BiSolidImageAdd>
      <p>Add Image</p>
    </div>
  );
}

export default AddImage;