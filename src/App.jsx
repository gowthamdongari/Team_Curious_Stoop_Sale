import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./components/auth/SignIn";
import { EventRegistrationForm } from "./components/eventregistration/EventRegister";
import TopNavBar from "./components/topnavbar/TopNavBar";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <div className="flex flex-col h-full w-full">
      <TopNavBar />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Signin" element={<SignIn />}></Route>
          <Route
            path="/Eventregister"
            element={<EventRegistrationForm />}
          ></Route>
          <Route path="/testimonial" element={<Testimonial/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
