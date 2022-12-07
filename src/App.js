import { Box, Container, CssBaseline, Paper } from "@material-ui/core";
import AppWrapper from "./AppRout";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PanelLayout } from "./layout/PanelLayout";

function App() {
  return (
    <>
      <CssBaseline />
            <Provider store={store}>
              <AppWrapper />
            </Provider>
    </>
  );
}

export default App;
