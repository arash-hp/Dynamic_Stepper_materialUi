import React from "react";
import {
    BrowserRouter as Router, useRoutes
} from "react-router-dom";
import { StepTable } from "./Api/StepTable";
import { LinaerStepper } from "./LinearStepper";


const Component1 = () => {
  return <LinaerStepper />;
};

const Component2 = () => {
  return <StepTable />;
};

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Component1 /> },
    { path: "step-show", element: <Component2 /> },
 
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;