import AppRoutes from "./routes/route";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
