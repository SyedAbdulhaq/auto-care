import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import FeedbackContext from "../context/FeedbackContext";
import { toast } from "react-toastify";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const { users, loginStatus, getUserInfo } = useContext(FeedbackContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // try {
    //   // register user (given in docs of firebase auth)
    //   const auth = getAuth();

    //   const userCredential = await createUserWithEmailAndPassword(
    //     auth,
    //     email,
    //     password
    //   );

    //   const user = userCredential.user;

    //   updateProfile(auth.currentUser, {
    //     // pass in current user and object to update user form name to display name
    //     displayName: name,
    //   });

    //   const formDataCopy = { ...formData };
    //   delete formDataCopy.password; // as we dont want password to be in the database
    //   formDataCopy.timestamp = serverTimestamp(); // time when sign up

    //   await setDoc(doc(db, "users", user.uid), formDataCopy); // update our database and user to user's collection

    //   navigate("/"); // after sign up redirect to home page
    // } catch (error) {
    //   toast.error("Something went wrong with registration");
    // }
    let numberOfUsers = users.length;
    users.forEach((element) => {
      if (email !== element.email) {
        getUserInfo(formData);
        console.log("all users: ", users);
        loginStatus();
        navigate("/");
      }
    });
    if (numberOfUsers < users.length) {
      return;
    } else {
      toast.error("User all ready exists");
    }
  };
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="nameInput"
            placeholder="Name"
            id="name"
            value={name}
            onChange={onChange}
          />
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />
          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />

            <img
              src={visibilityIcon}
              className="showPassword"
              alt="show Password"
              onClick={() => setShowPassword((preState) => !preState)}
            />
          </div>

          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot Password
          </Link>

          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>
            <button className="signUpButton">
              <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
            </button>
          </div>
        </form>

        {/* <OAuth /> */}

        <Link to="/sign-in" className="registerLink">
          Sign In Instead
        </Link>
      </div>
    </>
  );
}

export default SignUp;
