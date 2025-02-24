import PropTypes from 'prop-types'

export default function Title(props) {
  return (
    <div className="bg-transparent text-white text-center py-6 absolute left-1/2 -translate-x-1/2 w-3/4 my-10 z-20">
      <div className="mt-2">
        <img src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740335845/Ornament2_rwlwvz.png" alt="Filigrana superior" className="mx-auto w-full h-5" />
      </div>
      <h3 className="text-5xl font-serif tracking-widest uppercase">
        {props.text}
      </h3>
      <div className="mt-2">
        <img src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740335763/Ornament1_ogcwyx.png" alt="Filigrana" className="mx-auto w-90" />
      </div>
    </div>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
}
