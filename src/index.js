import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import userReducer from "./User";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = configureStore({
  reducer: {
    users: userReducer
  }
});

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
