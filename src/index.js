import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/global";

const root = createRoot(document.querySelector("#app"));

root.render(
  <>
    <App />
    <GlobalStyle />
  </>
);
