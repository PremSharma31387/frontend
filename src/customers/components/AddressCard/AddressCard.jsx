import React from "react";

const AddressCard = ({ address }) => {
  return (
    <div>
      <div className="space-y-3">
        <p className="font-semibold">
          {address?.firstName + " " + address?.lastName}
        </p>
        <p>
          {address?.state}, {address?.streetAddress}, {address?.zipCode}
        </p>
        <div>
          <p className="space-y-1">Phone Number</p>
          <p className="font-semibold">{address?.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
