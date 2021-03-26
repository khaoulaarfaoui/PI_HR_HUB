import React from "react";
import ReactDOM from "react-dom";
import ChatBotRobot from "./components/Chatbot/Chatbot.compoenent";

import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/store/store";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ChatBotRobot />
  </Provider>,
  document.getElementById("root")
);
