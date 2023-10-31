import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { ImagesContext } from '../pages/Home';

ImageBox.propTypes = {
  image: PropTypes.string,
  isFeatured: PropTypes.bool
};

function ImageBox({ image, isFeatured }) {
  const { setSelectedImg } = useContext(ImagesContext);
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(false);

  const onHover = () => {
    setHover(true);
  }

  const onLeave = () => {
    setHover(false);
  }

  const onSelect = (e) => {
    const state = e.target.checked;
    setSelected(state);
    if (state) setSelectedImg(prev => [...prev, image]); 
    else setSelectedImg(prev => prev.filter(val => val !== image));
  }

  const divClass = `
    relative hover:bg-black border rounded-md ${(isFeatured && "col-span-2 row-span-2")}
  `;

  const imgClass = `
    rounded-md hover:opacity-50 hover:bg-blend-darken transition-all duration-500 object-cover w-full ${(isFeatured ? "h-full" : "h-72")}
  `;

  const checkClass = "absolute top-3 left-3 checkbox checkbox-accent checkbox-lg rounded-full";

  return (
    <div onMouseEnter={onHover} onMouseLeave={onLeave} className={divClass}>
      <img src={image} className={imgClass} />
      {
        (hover || selected) && <input onChange={onSelect} checked={selected} type="checkbox" className={checkClass} />
      }
    </div>
  );
}

export default ImageBox;