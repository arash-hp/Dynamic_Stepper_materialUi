import { Box, Container, CssBaseline, Paper } from "@material-ui/core";
import AppWrapper from "./AppRout";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <Provider store={store}>
            <AppWrapper />
          </Provider>
        </Paper>
      </Container>
    </>
  );
}

export default App;
