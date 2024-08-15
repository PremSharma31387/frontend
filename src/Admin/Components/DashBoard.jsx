import { Grid } from "@mui/material";
import React from "react";
import Acheivement from "./Acheivement";
import MonthlyOverview from "./MonthlyOverview";

const DashBoard = () => {
  return (
    <div className="p-10">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Acheivement />
        </Grid>
        <Grid item xs={12} md={8}>
          <MonthlyOverview />
        </Grid>
      </Grid>
    </div>
  );
};

export default DashBoard;
