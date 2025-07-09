import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { UserProvider } from "./UserContext.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
