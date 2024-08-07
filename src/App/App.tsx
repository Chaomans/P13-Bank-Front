import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//Pages
import Home from "../pages/Home/Home";
import RootLayout from "./layouts/RootLayout/RootLayout";
import Login from "../pages/Login/Login";
import User from "../pages/User/User";
import NotFound from "../pages/NotFound/NotFound";

//state
import { Provider } from "react-redux";
import { store } from "../state/store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/user" element={<User />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
  {
    basename: import.meta.env.PROD ? "/P13-Bank-Front/" : "/",
  }
);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
