import React from "react";

const RestaurantInfo = () => (
  <div>
    <div className="row">
      <BasicDetails />
      <OwnerContactDetails />
    </div>
    <div className="row">
      <WorkingDays />
      <OpeningClosingTime />
    </div>
  </div>
);

const BasicDetails = () => (
  <div className="res-details">
    <h3>Basic Details</h3>
    <label>
      Restaurant Name:
      <input type="text" name="restaurantName" className="input-box" />
    </label>

    <label>
      Address:
      <input type="text" name="address" className="input-box" />
    </label>
    <label>
      Location:
      <input type="" name="location" className="input-box" />
    </label>
  </div>
);

const OwnerContactDetails = () => (
  <div className="res-details">
    <h3>Owner Contact Details</h3>
    <label>
      Owner Name:
      <input type="text" name="ownerName" className="input-box" />
    </label>

    <label>
      Email:
      <input type="email" name="email" className="input-box" />
    </label>

    <label>
      Mobile Number:
      <input type="tel" name="mobileNumber" className="input-box" />
    </label>

    <label>
      OTP Verification:
      <input type="text" name="otp" className="input-box" />
    </label>
  </div>
);

const WorkingDays = () => (
  <div className="res-details">
    <h3>Working Days</h3>
    <div>
      <label>
        <input type="checkbox" name="monday" />
        Monday
      </label>
      <label>
        <input type="checkbox" name="tuesday" />
        Tuesday
      </label>
      <label>
        <input type="checkbox" name="wednesday" />
        Wednesday
      </label>
      <label>
        <input type="checkbox" name="thursday" />
        Thursday
      </label>
      <label>
        <input type="checkbox" name="friday" />
        Friday
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" name="saturday" />
        Saturday
      </label>
      <label>
        <input type="checkbox" name="sunday" />
        Sunday
      </label>
    </div>
  </div>
);

const OpeningClosingTime = () => (
  <div className="res-details">
    <h3>Opening & Closing Time</h3>
    <label>
      Opening Time:
      <input type="time" name="openingTime" className="input-box" />
    </label>

    <label>
      Closing Time:
      <input type="time" name="closingTime" className="input-box" />
    </label>
  </div>
);

export default RestaurantInfo;
