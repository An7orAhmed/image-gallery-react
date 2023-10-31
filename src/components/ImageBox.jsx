import PropTypes from 'prop-types';

ImageBox.propTypes = {
  image: PropTypes.string,
  isFeatured: PropTypes.bool
};

function ImageBox({ image, isFeatured }) {
  return (
    <div className={"border rounded-md " + (isFeatured && "col-span-2 row-span-2")}>
      <img src={image} className={"rounded-md object-cover w-full " + (isFeatured ? "h-full" : "h-72")} />
    </div>
  );
}

export default ImageBox;