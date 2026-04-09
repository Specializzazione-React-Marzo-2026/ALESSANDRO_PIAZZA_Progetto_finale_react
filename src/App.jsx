import { RouterProvider } from "react-router";
import "./App.css";
import router from "./router/router";
import { UserContextProvider } from "./context/UserContext";

export default function App() {
  return (

    <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>
  );
}
