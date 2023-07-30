import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./utils/songslice.js";
import "./index.css";

const store = configureStore({
  reducer: {
    song: songReducer,
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
