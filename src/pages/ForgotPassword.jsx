import { useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import FeedbackContext from "../context/FeedbackContext";
// import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verify, checkVerification] = useState(false);
  const { users, updatePass } = useContext(FeedbackContext);
  const navigate = useNavigate();
  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = await users.find((user) => user.email === email);
    if (user) {
      // login success
      // loginStatus();
      // navigate("/");
      checkVerification(true);
    } else {
      // login failed
      toast.error("Bad User Credentials");
    }
    // try {
    //   const auth = getAuth();
    //   await sendPasswordResetEmail(auth, email);
    //   toast.success("Email was sent");
    // } catch (error) {
    //   toast.error("Could not send reset email");
    // }
  };
  const onSubmitPass = async (e) => {
    e.preventDefault();
    // const user = await users.find((user) => user.email === email);
    // if (user) {
    // login success
    // loginStatus();
    updatePass(password, email);
    console.log("pass updated", users);
    navigate("/sign-in");

    toast.success("Password Reset");
    // } else {
    //   // login failed
    //   toast.error("Bad User Credentials");
    // }
    // try {
    //   const auth = getAuth();
    //   await sendPasswordResetEmail(auth, email);
    //   toast.success("Email was sent");
    // } catch (error) {
    //   toast.error("Could not send reset email");
    // }
  };

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Forgot Password</p>
      </header>
      {verify ? (
        <main>
          <form onSubmit={onSubmitPass}>
            <input
              type="text"
              className="passwordInput"
              placeholder="password"
              id="password"
              value={password}
              onChange={onChangePassword}
            />
            <Link className="forgotPasswordLink" to="/sign-in">
              Sign In
            </Link>
            <div className="signInBar">
              <div className="signInText">Login</div>
              <button className="signInButton">
                <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
              </button>
            </div>
          </form>
        </main>
      ) : (
        <main>
          <form onSubmit={onSubmit}>
            <input
              type="email"
              className="emailInput"
              placeholder="Email"
              id="email"
              value={email}
              onChange={onChange}
            />
            <Link className="forgotPasswordLink" to="/sign-in">
              Sign In
            </Link>
            <div className="signInBar">
              <div className="signInText">Verify</div>
              <button className="signInButton">
                <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
              </button>
            </div>
          </form>
        </main>
      )}
    </div>
  );
}

export default ForgotPassword;
