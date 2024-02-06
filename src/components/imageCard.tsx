const ImageCard = ({ item }: { item: any }) => {
  return (
    <div className="bg-white text-white mx-7">
      <img
        src={item.pcImageUrl}
        alt="Item 1"
        className="w-custom-width h-custom-height object-cover"
      />
      {/* <div className="absolute inset-0 bg-black opacity-50 w-[70rem] h-full"></div> */}
      {/* Dark overlay */}
    </div>
  );
};

export default ImageCard;
