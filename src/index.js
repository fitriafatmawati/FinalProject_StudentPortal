import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import "./Style/style.css";

// TODO: answer here

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = extendTheme({
  colors: {
    dark: "#230b01",
    light: "#fffbfa",
    primary: "#38b5bf",
    neutral: "#ffeae1",
    secondary: "#fdb596",
  },
});

root.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);
