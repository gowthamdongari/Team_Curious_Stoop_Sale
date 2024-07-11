import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import routes from "./routes";
import LoginPage from "../components/Auth/LoginPage";
import Register from "../components/Auth/Register";

const getRoutes = (routes) => {
  return routes?.map((props, key) => {
    console.log(props.component);
    return (
      <Route path={`/${props?.path}`} element={props?.component} key={key} />
    );
  });
};
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          {getRoutes(routes)}
        </Route>
        <Route path="/Login" element={<LoginPage/>}></Route>
        <Route path="/Registration" element={<Register/>}></Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
