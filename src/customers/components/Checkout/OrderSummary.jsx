import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import CartItems from "../Cart/CartItems";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummary = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const orderId = searchParam.get("order_id");
  const { order } = useSelector((store) => store);

  console.log("------------>", order.order);

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  const handlePayment = () => {
    dispatch(createPayment(orderId));
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order.order?.shippingAddress} />
      </div>

      <div>
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {order.order?.orderItems?.map((item) => (
              <CartItems item={item} close={true} />
            ))}
            {/* <CartItems item= /> */}
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
                  <span>₹{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Discount</span>
                  <span className="text-green-600">
                    -₹{order.order?.totalDiscountedPrice}
                  </span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3  font-bold">
                  <span>Total Price</span>
                  <span className="text-green-600">
                    ₹{order.order?.discount}
                  </span>
                </div>
              </div>
              <Button
                onClick={handlePayment}
                variant="contained"
                className="w-full"
                sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
              >
                Payment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
