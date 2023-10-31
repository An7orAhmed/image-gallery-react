import { BiSolidImageAdd } from 'react-icons/bi';

function AddImage() {
  return (
    <div className="flex flex-col hover:text-accent hover:border-accent items-center justify-center gap-3 border-dashed border-2 rounded-md w-full h-72">
      <BiSolidImageAdd className="text-2xl"></BiSolidImageAdd>
      <p>Add Image</p>
    </div>
  );
}

export default AddImage;