import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const step = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out For Delivery",
  "Delivered",
];

const OrderTracker = ({ activeStep }) => {
  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {step.map((label) => (
          <Step>
            <StepLabel sx={{ color: "#9155FD", fontsize: "44px" }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracker;
