import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Authprovider from "./AuthProvider/Authprovider";
import routeri from "./Router/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={routeri} />
    </Authprovider>
  </React.StrictMode>
);
