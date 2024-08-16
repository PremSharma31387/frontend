import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = ({ item, date, address, status }) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short" };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };

  return (
    <div
      onClick={() =>
        navigate(`/account/order/${item.id}`, {
          state: { address: address, status: status },
        })
      }
      className="p-5 shadow-md shadow-black hover:shadow-2xl border"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src={item.product?.imageUrl}
              alt={item.title}
            />
            <div className="ml-5 space-y-2">
              <p className="font-semibold">{item.product?.title}</p>
              <p className="opacity-50 text-xs font-semibold">
                Size : {item.size}
              </p>
              <p className="opacity-50 text-xs font-semibold">
                Color : {item.product?.color}
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹{item.discountedPrice}</p>
        </Grid>

        <Grid item xs={4}>
          {item.orderStatus === "DELIVERED" && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered on {item.deliveryDate}</span>
              </p>
              <p className="text-xs">Your item has been delivered</p>
            </div>
          )}
          {item.orderStatus !== "DELIVERED" && (
            <p>
              <span>
                Expected Delivery on{" "}
                <span className="text-[#65a30d] font-bold">
                  {formatDate(date)}
                </span>
              </span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
