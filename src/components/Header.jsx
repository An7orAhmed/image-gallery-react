import { useContext } from 'react';
import { BiSolidImageAdd } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { ImagesContext } from '../pages/Home';

function Header() {
  const { setImages, setectedImg, setSelectedImg } = useContext(ImagesContext);
  const unselect = () => setSelectedImg([]);
  
  const deleteSelected = () => {
    setImages(prev => prev.filter(item => !setectedImg.includes(item)));
    setSelectedImg([]);
  };

  const counter = <div className="flex gap-2 items-center">
    <button onClick={unselect} className="btn btn-outline text-2xl text-red-500"><MdOutlineCancel /></button>
    <p>{setectedImg.length} Image Setected</p>
  </div>;

  return (
    <div className="sticky top-0 z-20 navbar bg-base-100 bg-opacity-80 backdrop-blur shadow-lg mb-10 py-4">
      <div className="flex-1">
        <a className="normal-case text-2xl pl-2 font-bold">
          {
            setectedImg?.length > 0 ? counter : "Image Gallery"
          }
        </a>
      </div>
      <div className="flex-none gap-3">
        {
          setectedImg?.length > 0 && 
          <div onClick={deleteSelected} className="flex gap-2 items-center btn btn-outline btn-error">
            <AiTwotoneDelete className="text-xl"></AiTwotoneDelete>Delete Selected
          </div>
        }
        <div className="flex gap-2 items-center btn btn-outline btn-accent">
          <BiSolidImageAdd className="text-xl"></BiSolidImageAdd>Add Image
        </div>
      </div>
    </div>
  );
}

export default Header;