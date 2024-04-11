import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/global";
import CallComponent from "./components/call";

const root = createRoot(document.querySelector("#app"));

root.render(
  <>
    <App />
    <GlobalStyle />
  </>
);
