// import React from "react";
// import MainCarousel from "../HomeCarousel/MainCarousel";
// import HomeSectionCarousel from "../HomeSectionCarousel/HomeSectionCarousel";
// import { mens_kurta } from "../../../data/mens_kurta";

// const productData = [
//   "mens_kurta",
//   "men_jeans",
//   "men_shirts",
//   "women_top",
//   "women_jeans",
// ];

// const HomePage = () => {
//   return (
//     <div>
//       <MainCarousel />
//       <div className="space-y-10 py-20 flex flex-col px-5 lg:px-10">
//         <HomeSectionCarousel data={mens_kurta} sectionName={"Men Kurta"} />
//         <HomeSectionCarousel data={mens_kurta} sectionName={"Men Jeans"} />
//         <HomeSectionCarousel data={mens_kurta} sectionName={"Men Shirt"} />
//         <HomeSectionCarousel data={mens_kurta} sectionName={"Women Top"} />
//         <HomeSectionCarousel data={mens_kurta} sectionName={"Women Jeans"} />
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainCarousel from "../HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../HomeSectionCarousel/HomeSectionCarousel";
import { findProductByCategory } from "../../../State/Product/Action";
// import { findProductByCategory } from "../../../actions/productActions"; // Update this path accordingly

const productData = [
  "mens_kurta",
  "men_jeans",
  "shirt",
  "top",
  "women_jeans",
];

const HomePage = () => {
  const dispatch = useDispatch();

  // Dispatch action to fetch products by category when component mounts
  useEffect(() => {
    dispatch(findProductByCategory(productData));
  }, [dispatch]);

  // Select product data from the Redux store
  const { products, loading, error } = useSelector(
    (state) => state.productCategory
  );

  console.log("++++++++++++++++", products);

  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col px-5 lg:px-10">
        {productData.map((category, index) => (
          <HomeSectionCarousel
            key={index}
            data={products[category] || []}
            sectionName={category.replace("_", " ")}
            loading={loading[category]}
            error={error[category]}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
