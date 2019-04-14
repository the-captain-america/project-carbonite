import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { ThemeProvider } from "styled-components";
import "babel-polyfill";

import themes from "./themes";


const rootEl = document.getElementById("root");

ReactDOM.render(
	<ThemeProvider theme={themes}>
			<App />
	</ThemeProvider>,
	rootEl
);

if (module.hot) {
	module.hot.accept("./App", () => {
		const NextApp = require("./App").default;
		ReactDOM.render(
			<ThemeProvider theme={themes}>
					<NextApp />
			</ThemeProvider>,
			rootEl
		);
	});
}

registerServiceWorker();
