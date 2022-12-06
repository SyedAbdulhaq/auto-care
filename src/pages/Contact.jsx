import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendMessage = () => {
    if (data.email !== "" && data.name !== "" && data.number !== "") {
      console.log(data);
      setData({ name: "", email: "", number: "", message: "" });
    } else {
      toast.error("Please fill all the fields.");
    }
  };
  return (
    <div>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Leave us a Message</p>
        </header>

        <main>
          {/* <div className="contactLandlord">
            <p className="landlordName">
              Our team of experienced auto technicians are ready to answer any
              questions you may have. We’ll go the extra mile to get you back
              behind the wheel quickly and safely.
            </p>
          </div> */}

          <form className="messageForm">
            <div className="messageDiv">
              <label htmlFor="message" className="messageLabel">
                Name
              </label>
              <div class="input-group flex-nowrap">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Name"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  name="name"
                  onChange={handleChange}
                  value={data.name}
                  onKeyPress={(event) => {
                    event.key === "Enter" && handleChange();
                  }}
                />
              </div>
              <br />
              <label htmlFor="message" className="messageLabel">
                Email
              </label>
              <div class="input-group flex-nowrap">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Your Email"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              <br />
              <label htmlFor="message" className="messageLabel">
                number
              </label>
              <div class="input-group flex-nowrap">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your number : +9233*******9"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  name="number"
                  maxLength="13"
                  minLength="13"
                  required
                  value={data.number}
                  onChange={handleChange}
                />
              </div>
              <br />
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Your message (optional)
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Type your message"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <button
              type="button"
              className="primaryButton"
              onClick={sendMessage}
            >
              Send Message
            </button>
          </form>
          <div className="contactLandlord">
            <p className="landlordName text-muted">
              Our team of experienced auto technicians are ready to answer any
              questions you may have. We’ll go the extra mile to get you back
              behind the wheel quickly and safely.
            </p>
          </div>
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item" style={{ marginLeft: "30px" }}>
              <h5 style={{ marginLeft: "65px" }}>
                <b>Email Us</b>
              </h5>
              <p className="nav-link px-2 text-muted justify-content-center">
                Alrehmanauto7@gmail.com
              </p>
            </li>
            <li className="nav-item" style={{ marginLeft: "30px" }}>
              <h5>
                <b>Contact Us</b>
              </h5>
              <p className="nav-link px-2 text-muted">+92 309 7520266</p>
            </li>
            <li className="nav-item" style={{ marginLeft: "30px" }}>
              <h5>
                <b>Business Hours</b>
              </h5>
              <p className="nav-link px-2 text-muted">
                7:00am – 5:30pm,
                <br />
                Monday – Friday
              </p>
            </li>
          </ul>
        </main>
      </div>
    </div>
  );
}
