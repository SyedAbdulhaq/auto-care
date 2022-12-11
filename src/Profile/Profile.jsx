import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";

function Profile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postcode: "",
    phoneNumber: "",
  });
  const { email, name, address, city, postcode, phoneNumber } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      email !== "" &&
      name !== "" &&
      phoneNumber !== "" &&
      address !== "" &&
      postcode !== "" &&
      city !== ""
    ) {
      navigate("/");
    } else {
      toast.error("Please fill all the fields.");
    }
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Billing details</p>
        </header>

        <form onSubmit={onSubmit}>
          <label htmlFor="message" className="messageLabel">
            <b>Name</b>
          </label>
          <input
            type="text"
            className="billingDetails"
            placeholder="Your Name"
            id="name"
            value={name}
            onChange={onChange}
            required
          />
          <label htmlFor="message" className="messageLabel">
            <b>City</b>
          </label>
          <input
            type="text"
            className="billingDetails"
            placeholder="Your City"
            id="city"
            value={city}
            onChange={onChange}
            required
          />
          <label htmlFor="message" className="messageLabel">
            <b>Address</b>
          </label>
          <input
            type="text"
            className="billingDetails"
            placeholder="Your Address"
            id="address"
            value={address}
            onChange={onChange}
            required
          />
          <label htmlFor="message" className="messageLabel">
            <b>Postal Code</b>
          </label>
          <input
            type="text"
            className="billingDetails"
            placeholder="Your Postal Code"
            id="postcode"
            value={postcode}
            onChange={onChange}
            required
          />
          <label htmlFor="message" className="messageLabel">
            <b>Email</b>
          </label>
          <input
            type="email"
            className="billingDetails"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
            required
          />
          <label htmlFor="message" className="messageLabel">
            <b>Phone Number</b>
          </label>
          <input
            type="text"
            className="billingDetails"
            placeholder="Enter your number : +9233*******9"
            id="phoneNumber"
            value={phoneNumber}
            onChange={onChange}
            maxLength="13"
            minLength="13"
            required
          />

          <div className="signInBar">
            <p className="signInText">Place Order</p>
            <button className="signInButton">
              <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
            </button>
          </div>
        </form>

        {/* <OAuth /> */}
      </div>
    </>
  );
}

export default Profile;
