import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./context/UserContext.jsx";
import { PinProvider } from "./context/PinContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <PinProvider>
        <App />
      </PinProvider>
    </UserProvider>
  </React.StrictMode>
);
