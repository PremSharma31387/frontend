import { Button, IconButton } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useDispatch } from "react-redux";
import { deleteItemCart, updateCartItem } from "../../../State/Cart/Action";

const CartItems = ({ item, close }) => {
  const dispatch = useDispatch();
  console.log(item);

  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: item.quantity + num },
      cartItemId: item?.id,
    };
    console.log("###############",data);
    dispatch(updateCartItem(data));
  };

  const handleRemoveCartItem = () => {
    dispatch(deleteItemCart(item?.id));
  };

  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item.product.imageUrl}
            alt="internet error"
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-70">
            Size: {item.size},{item.product.color}
          </p>
          <p className="opacity-70">Seller: {item.product.brand}</p>
          <div className="flex space-x-5 items-center pt-3 text-gray-900">
            <p className="font-semibold">₹{item.discountedPrice}</p>
            <p className="opacity-50 line-through ">₹{item.price}</p>
            <p className="text-green-600 font-semibold">
              {item.product?.discountPercent}% off
            </p>
          </div>
        </div>
      </div>

      {!close && (
        <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton
              onClick={() => handleUpdateCartItem(-1)}
              disabled={item.quantity <= 1}
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>
            <IconButton sx={{ color: "RGB(145 85 253)" }}>
              <AddCircleOutlineIcon onClick={() => handleUpdateCartItem(1)} />
            </IconButton>
          </div>
          <div>
            <Button
              onClick={handleRemoveCartItem}
              sx={{ color: "RGB(145 85 253)" }}
            >
              Remove
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
