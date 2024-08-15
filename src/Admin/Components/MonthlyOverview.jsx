// import {
//   AccountCircle,
//   AttachMoney,
//   MoreVert,
//   SettingsCell,
//   TrendingUp,
// } from "@mui/icons-material";
// import {
//   Avatar,
//   Box,
//   Card,
//   CardContent,
//   CardHeader,
//   Grid,
//   IconButton,
//   Typography,
// } from "@mui/material";
// import React from "react";

// const salesData = [
//   {
//     stats: "245K",
//     title: "Sales",
//     color: "#E5D68A",
//     icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
//   },
//   {
//     stats: "12.5K",
//     title: "Customers",
//     color: "#22CB5C",
//     icon: <AccountCircle sx={{ fontSize: "1.75rem" }} />,
//   },
//   {
//     stats: "1.54K",
//     title: "Products",
//     color: "#DE4839",
//     icon: <SettingsCell sx={{ fontSize: "1.75rem" }} />,
//   },
//   {
//     stats: "12.5K",
//     title: "Customers",
//     color: "#12B0E8",
//     icon: <AttachMoney sx={{ fontSize: "1.75rem" }} />,
//   },
// ];

// const renderStats = () => {
//   return salesData.map((item, index) => (
//     <Grid>
//       <Box sx={{ display: "flex", alignItems: "center" }}>
//         <Avatar
//           variant="rounded"
//           sx={{
//             mr: 3,
//             width: 44,
//             height: 44,
//             boxShadow: 3,
//             color: "white",
//             backgroundColor: `${item.color}`,
//           }}
//         >
//           {item.icon}
//         </Avatar>

//         <Box sx={{ display: "flex", flexDirection: "column" }}>
//           <Typography variant="caption">{item.title}</Typography>
//           <Typography variant="h6">{item.stats}</Typography>
//         </Box>
//       </Box>
//     </Grid>
//   ));
// };

// const MonthlyOverview = () => {
//   return (
//     <Card sx={{ bgcolor: "#242B2E", color: "white" }}>
//       <CardHeader
//         title="Monthly Overview"
//         action={
//           <IconButton size="small">
//             <MoreVert />
//           </IconButton>
//         }
//         subheader={
//           <Typography variant="body2">
//             <Box component="span" sx={{ fontWeight: 600 }}>
//               Total 53.5% Growth
//             </Box>
//             This month
//           </Typography>
//         }
//         titleTypographyProps={{
//           sx: {
//             mb: 2.5,
//             lineHeight: "2rem !important",
//             letterSpacing: "0.15px !important",
//           },
//         }}
//       />

//       <CardContent sx={{ pt: (theme) => `${theme.spacing(3)}!important` }}>
//         <Grid container spacing={[5, 0]} sx={{ mr: 50 }}>
//           {renderStats()}
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };

// export default MonthlyOverview;

import {
  AccountCircle,
  AttachMoney,
  MoreVert,
  SettingsCell,
  TrendingUp,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const salesData = [
  {
    stats: "245K",
    title: "Sales",
    color: "#E5D68A",
    icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "12.5K",
    title: "Customers",
    color: "#22CB5C",
    icon: <AccountCircle sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "1.54K",
    title: "Products",
    color: "#DE4839",
    icon: <SettingsCell sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "88K",
    title: "Revenues",
    color: "#12B0E8",
    icon: <AttachMoney sx={{ fontSize: "1.75rem" }} />,
  },
];

const renderStats = () => {
  return salesData.map((item, index) => (
    <Grid item xs={12} sm={6} md={3} key={index}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          variant="rounded"
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: "white",
            backgroundColor: `${item.color}`,
          }}
        >
          {item.icon}
        </Avatar>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="caption">{item.title}</Typography>
          <Typography variant="h6">{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ));
};

const MonthlyOverview = () => {
  return (
    <Card sx={{ bgcolor: "#242B2E", color: "white" }}>
      <CardHeader
        title="Monthly Overview"
        action={
          <IconButton size="small">
            <MoreVert />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box component="span" sx={{ fontWeight: 600 }}>
              Total 53.5% Growth
            </Box>
            😎This month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: "0.15px !important",
          },
        }}
      />

      <CardContent sx={{ pt: (theme) => `${theme.spacing(3)}!important` }}>
        <Grid container spacing={3}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MonthlyOverview;
