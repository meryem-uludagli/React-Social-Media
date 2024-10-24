// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals"; // Doğru yolu kontrol edin

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Web vitallerini ölçmek için çağırabilirsiniz
reportWebVitals();
