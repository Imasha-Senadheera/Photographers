import React from "react";
import { IoIosAddCircle } from "react-icons/io";

const ImageCard = ({ imageUrl, add }) => {
  return (
    <div className="bg-white shadow-md overflow-hidden rounded-lg w-[300px] h-[233px]">
      {add ? (
        <div className="flex justify-center items-center w-full h-full bg-gray-100 text-black cursor-pointer">
          <IoIosAddCircle className="text-4xl opacity-70" />
        </div>
      ) : (
        <img src={imageUrl} alt="Card" className="w-full h-full object-cover" />
      )}
    </div>
  );
};

export default ImageCard;
