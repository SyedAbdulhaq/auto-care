import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import Accessories from "./category/Accessories";
import AirFilter from "./category/AirFilter";
import BrakePads from "./category/BrakePads";
import EngineOil from "./category/EngineOil";
import OilFilter from "./category/OilFilter";
import SparkPlug from "./category/SparkPlug";
import PrivateRoute from "./Profile/PrivateRoute";
import Profile from "./Profile/Profile";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import { FeedbackProvider } from "./context/FeedbackContext";
import ProductDetails from "./pages/ProductDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckOut from "./pages/CheckOut";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TabsDisplay from "./pages/TabsDisplay";

function App() {
  return (
    <>
      <FeedbackProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/cart" element={<CheckOut />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/air-filter" element={<AirFilter />} />
            <Route path="/brake-pads" element={<BrakePads />} />
            <Route path="/engine-oil" element={<EngineOil />} />
            <Route path="/oil-filter" element={<OilFilter />} />
            <Route path="/spark-plug" element={<SparkPlug />} />
            <Route path="/product-details" element={<ProductDetails />} />
          </Routes>
          <TabsDisplay />
          <Footer />
        </Router>
        <ToastContainer />
      </FeedbackProvider>
    </>
  );
}

export default App;
