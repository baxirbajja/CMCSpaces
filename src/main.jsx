import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <h4 className="copyright">
      Copyright © 2025 CMC Spaces. Tous droits réservés.
      <br />
      <a
        href="https://cmc.ac.ma/fr/cmc-rabat-sale-kenitra"
        target="_blank"
        rel="noopener noreferrer"
      >
        CMC Rabat
      </a>
    </h4>
  </StrictMode>
);
