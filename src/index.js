import React from "react";
import { render } from "react-dom";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import App from "./App";
import theme from "./utils/theme";

const root = document.getElementById("root");

render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<App />
	</ThemeProvider>,
	root
);
