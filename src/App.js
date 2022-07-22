import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import {
  Signin,
  Signup,
  SignupNewChurch,
  SignupNewStaff,
  SignupChurchDetails,
  SignupSuccessMsg,
  ForgotPassword,
  ResetPassword,
  ChurchPlansAndPricing,
} from "./pages";
import { Header, Footer, NotFound } from "./components";
// import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/church" element={<SignupNewChurch />} />
        <Route path="/signup/staff" element={<SignupNewStaff />} />
        <Route
          path="/signup/church/details"
          element={<SignupChurchDetails />}
        />
        <Route path="/success" element={<SignupSuccessMsg />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/plans" element={<ChurchPlansAndPricing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer content />
    </Fragment>
  );
}

export default App;
