import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { ImagesContext } from '../pages/Home';
import { useDrag, useDrop } from 'react-dnd';

ImageBox.propTypes = {
  image: PropTypes.string,
  index: PropTypes.number,
  isFeatured: PropTypes.bool,
  moveImage: PropTypes.func,
};

function ImageBox({ image, index, isFeatured, moveImage }) {
  const { setectedImg, setSelectedImg } = useContext(ImagesContext);
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(false);

  const [, drag] = useDrag({
    type: 'image',
    item: { index },
  });

  const [{ isActive }, drop] = useDrop({
    accept: 'image',
    collect: (monitor) => ({
      isActive: monitor.canDrop() && monitor.isOver(),
    }),
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  useEffect(() => {
    if (setectedImg.length === 0) setSelected(false);
  }, [setectedImg]);

  const onHover = () => setHover(true);
  const onLeave = () => setHover(false);

  const onSelect = (e) => {
    const state = e.target.checked;
    setSelected(state);
    if (state) setSelectedImg(prev => [...prev, image]);
    else setSelectedImg(prev => prev.filter(val => val !== image));
  }

  const divClass = `
    ${selected ? "bg-white" : "hover:bg-black"}
    relative border-2 rounded-md
    ${(isFeatured ? "col-span-2 row-span-2 h-full" : "h-fit")}
  `;

  const imgClass = `
    ${selected && "scale-75"}
    rounded-md hover:opacity-50 hover:bg-blend-darken transition-all duration-500 object-cover w-full
    ${(isFeatured ? "h-full" : "h-72")}
    ${isActive && "opacity-30"}
  `;

  const checkClass = "absolute top-3 left-3 checkbox checkbox-accent checkbox-lg rounded-full";

  return (
    <div ref={(node) => drag(drop(node))} style={{ cursor: 'move' }} onMouseEnter={onHover} onMouseLeave={onLeave} className={divClass}>
      <img src={image} className={imgClass} />
      {
        (hover || selected) && <input onChange={onSelect} checked={selected} type="checkbox" className={checkClass} />
      }
    </div>
  );
}

export default ImageBox;