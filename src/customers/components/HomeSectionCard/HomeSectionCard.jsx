// import React from "react";

// const HomeSectionCard = ({ product }) => {
//   return (
//     <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg  shadow-lg overflow-hidden w-[15rem] mx-3">
//       <div className="h-[13rem] w-[10rem]">
//         <img
//           className="object-cover object-top w-full h-full"
//           src={product.imageUrl}
//           alt=""
//         />
//       </div>

//       <div className="p-4">
//         <h1 className="text-lg font-medium text-gray-900">{product.brand}</h1>
//         <p className="mt-2  text-sm text-gray-500">{product.title}</p>
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCard;

import React from "react";
import { useNavigate } from "react-router-dom";

const HomeSectionCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg  shadow-lg overflow-hidden w-[15rem] mx-3"
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="p-4">
        <h1 className="text-lg font-medium text-gray-900">{product.brand}</h1>
        <p className="mt-2  text-sm text-gray-500">{product.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
