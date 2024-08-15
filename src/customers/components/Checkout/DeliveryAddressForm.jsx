// import { Box, Button, Grid, TextField } from "@mui/material";
// import React from "react";
// import AddressCard from "../AddressCard/AddressCard";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { createOrder } from "../../../State/Order/Action";

// const DeliveryAddressForm = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const handleDeliveryButton = () => {
//     navigate("/checkout/?step=3");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = new FormData(e.currentTarget);

//     const address = {
//       firstname: data.get("firstname"),
//       lastname: data.get("lastname"),
//       street: data.get("address"),
//       city: data.get("city"),
//       state: data.get("state"),
//       zip: data.get("zip"),
//       mobile: data.get("phoneNumber"),
//     };
//     const orderData = { address, navigate };

//     dispatch(createOrder(orderData));

//     console.log("Address", address);
//   };

//   return (
//     <div>
//       <Grid container spacing={4}>
//         <Grid
//           xs={12}
//           lg={5}
//           className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll mt-8"
//         >
//           <div className="p-5 py-7 border-b cursor-pointer">
//             <AddressCard />
//             <Button
//               sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
//               size="large"
//               variant="contained"
//             >
//               Delivery Here
//             </Button>
//           </div>
//         </Grid>

//         <Grid item xs={12} lg={7}>
//           <Box className="border rounded-s-md shadow-md p-5">
//             <form onSubmit={handleSubmit}>
//               <Grid container spacing={3}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="firstname"
//                     name="firstname"
//                     label="First Name"
//                     fullWidth
//                     autoComplete="given-name"
//                   />
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="lastname"
//                     name="lastname"
//                     label="Last Name"
//                     fullWidth
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     id="address"
//                     name="address"
//                     label="Address"
//                     fullWidth
//                     autoComplete="given-name"
//                     multiline
//                     rows={4}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="city"
//                     name="city"
//                     label="City"
//                     fullWidth
//                     autoComplete="given-name"
//                   />
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="state"
//                     name="state"
//                     label="State / Province / Region"
//                     fullWidth
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="zip"
//                     name="zip"
//                     label="Zip / Postal Code "
//                     fullWidth
//                     autoComplete="shipping postal-code"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     label="Phone Number"
//                     fullWidth
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Button
//                     onClick={handleDeliveryButton}
//                     sx={{ py: 1.5, mt: 2, bgcolor: "RGB(145 85 253)" }}
//                     size="large"
//                     variant="contained"
//                     type="submit"
//                   >
//                     Delivery Here
//                   </Button>
//                 </Grid>
//               </Grid>
//             </form>
//           </Box>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default DeliveryAddressForm;

import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../State/Order/Action";

const DeliveryAddressForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  const addresses = auth.user?.addresses || [];
  const lastTwoAddresses = addresses.slice(-2);
  // console.log("---------->**************", lastTwoAddresses);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("streetAddress"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zipCode"),
      mobile: data.get("phoneNumber"),
    };
    const orderData = { address, navigate };

    dispatch(createOrder(orderData));

    // console.log("Address", address);
  };

  const handleDeliveryButton = (address) => {
    // navigate("/checkout/?step=3");
    const orderData = { address, navigate };

    dispatch(createOrder(orderData));
  };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll mt-8"
        >
          {lastTwoAddresses.map((address) => (
            <div className="p-5 py-7 border-b cursor-pointer">
              <AddressCard address={address} />
              <Button
                sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
                size="large"
                variant="contained"
                onClick={() => handleDeliveryButton(address)}
              >
                Delivery Here
              </Button>
            </div>
          ))}
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="streetAddress"
                    name="streetAddress"
                    label="Street Address"
                    fullWidth
                    autoComplete="shipping street-address"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="shipping address-level2"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State / Province / Region"
                    fullWidth
                    autoComplete="shipping address-level1"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zipCode"
                    name="zipCode"
                    label="Zip / Postal Code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="tel"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    sx={{ py: 1.5, mt: 2, bgcolor: "RGB(145 85 253)" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Delivery Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
