/* eslint-disable @typescript-eslint/no-explicit-any */
const ImageCard = ({ item }: { item: any }) => {
  return (
    <div className="bg-white text-white mx-7">
      <img
        src={item.pcImageUrl}
        alt="Item 1"
        className="w-custom-width h-custom-height object-cover"
      />
    </div>
  );
};

export default ImageCard;
