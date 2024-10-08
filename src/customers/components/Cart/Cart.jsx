// import React, { useEffect } from "react";
// import CartItems from "./CartItems";
// import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getCart } from "../../../State/Cart/Action";

// const Cart = () => {
//   const navigate = useNavigate();
//   const { cart, deleteCartItem, updateCartItem } = useSelector(
//     (store) => store
//   );
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getCart());
//   }, [dispatch, cart.deleteCartItem, cart.updateCartItem]);

//   // console.log("-------------------------------------------->", cart);

//   const handleAddToCart = () => {
//     navigate("/checkout/?step=2");
//   };

//   console.log("----------------->", cart);

//   return (
//     <div>
//       <div className="lg:grid grid-cols-3 lg:px-16 relative">
//         <div className="col-span-2">
//           {cart.cart?.cartItems?.map((item) => (
//             <CartItems key={item?.id} item={item} />
//           ))}
//         </div>
//         <div className="px-6 sticky top-0 h-[100vh] mt-5 lg:mt-0">
//           <div className="border">
//             <p className="uppercase font-bold opacity-60 p-3 pb-4">
//               Price Details
//             </p>
//             <hr />
//             <div className="space-y-3 px-3 mb-6 font-semibold">
//               <div className="flex justify-between pt-3 text-black">
//                 <span>Price</span>
//                 <span>₹{cart.cart?.totalPrice}</span>
//               </div>
//               <div className="flex justify-between pt-3">
//                 <span>Discount</span>
//                 <span className="text-green-600">
//                   -₹{cart.cart?.totalDiscountedPrice}
//                 </span>
//               </div>
//               <div className="flex justify-between pt-3">
//                 <span>Delivery Charge</span>
//                 <span className="text-green-600">Free</span>
//               </div>
//               <div className="flex justify-between pt-3  font-bold">
//                 <span>Total Price</span>
//                 <span className="text-green-600">₹{cart.cart?.discount}</span>
//               </div>
//             </div>
//             <Button
//               onClick={handleAddToCart}
//               variant="contained"
//               className="w-full"
//               sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
//             >
//               Check Out
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect } from "react";
import CartItems from "./CartItems";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, deleteCartItem, updateCartItem, addItemcart } = useSelector(
    (store) => store.cart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch, deleteCartItem, updateCartItem, addItemcart]);

  const handleAddToCart = () => {
    navigate("/checkout/?step=2");
  };

  console.log("----------------------------------------------->>>");

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {cart?.cartItems?.map((item) => (
            <CartItems key={item?.id} item={item} />
          ))}
        </div>
        <div className="px-6 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 p-3 pb-4">
              Price Details
            </p>
            <hr />
            <div className="space-y-3 px-3 mb-6 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Discount</span>
                <span className="text-green-600">
                  -₹{cart?.totalDiscountedPrice}
                </span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3  font-bold">
                <span>Total Price</span>
                <span className="text-green-600">₹{cart?.discount}</span>
              </div>
            </div>
            <Button
              onClick={handleAddToCart}
              variant="contained"
              className="w-full"
              sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
            >
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
