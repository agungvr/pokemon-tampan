import React from "react";
import ReactDOM from "react-dom";
import App from "./root";
import * as serviceWorker from "./serviceWorker";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

serviceWorker.register();
