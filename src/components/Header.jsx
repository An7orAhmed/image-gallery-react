import { BiSolidImageAdd } from 'react-icons/bi';

function Header() {
  return (
    <div className="sticky top-0 navbar bg-base-100 shadow-lg mb-10 py-4">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Image Gallery</a>
      </div>
      <div className="flex-none gap-3">
        
        <div className="flex gap-2 items-center btn btn-outline btn-accent">
          <BiSolidImageAdd className="text-xl"></BiSolidImageAdd>Add Image
        </div>
      </div>
    </div>
  );
}

export default Header;