import { Container, Paper,Box } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { PanelLayout } from "./layout/PanelLayout";
import { LinaerStepper } from "./page/LinearStepper";
import { StepTable } from "./page/StepTable";

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
      <PanelLayout>
        <Container component={Box} p={4}>
          <Paper component={Box} p={3}>
            <App />
          </Paper>
        </Container>
      </PanelLayout>
    </Router>
  );
};

export default AppWrapper;
