import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { deepPurple } from "@mui/material/colors";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getorderItem } from "../../../State/OrderItem/Action";
import { getUserOrderHistory } from "../../../State/Order/Action";

const OrderDetail = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);
  console.log("Orders--------->", order);
  useEffect(() => {
    dispatch(getUserOrderHistory());
  }, []);
  const param = useParams();
  const orderItemId = param.orderId;
  const { orderItem } = useSelector((store) => store);
  const location = useLocation();
  const address = location.state?.address;
  const orderStatus = location.state?.status;
  console.log("status", orderStatus);
  const step =
    orderStatus === "CONFIRMED"
      ? 2
      : orderStatus === "SHIPPED"
      ? 3
      : orderStatus === "DELIVERED"
      ? 5
      : 1;

  useEffect(() => {
    dispatch(getorderItem(orderItemId));
  }, []);

  console.log(orderItem);

  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard address={address} />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={step} />
      </div>

      <Grid className="space-y-5" container>
        <Grid
          container
          spacing={2}
          className="shadow-xl rounded-lg p-5 border"
          sx={{ alignItems: "center" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[8rem] h-[8rem] object-cover object-top rounded-md"
                src={orderItem.orderItem?.product.imageUrl}
                alt=""
              />
              <div className="space-y-2">
                <p className="font-semibold text-lg">
                  {orderItem.orderItem?.product.title}
                </p>
                <p className="space-x-5 opacity-50 text-sm font-medium">
                  <span>Color : {orderItem.orderItem?.product.color}</span>
                  <span>Size : {orderItem.orderItem?.size}</span>
                </p>
                <p className="text-sm font-medium">
                  Seller : {orderItem.orderItem?.product.brand}
                </p>
                <p className="text-lg font-semibold">
                  ₹{orderItem.orderItem?.product.discountedPrice}
                </p>
              </div>
            </div>
          </Grid>

          <Grid
            item
            xs={6}
            container
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Box sx={{ color: deepPurple[500], textAlign: "right" }}>
              <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
              <span className="text-sm font-medium">
                Rate & Review Products
              </span>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderDetail;
