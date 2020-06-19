import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("it renders App corectly", () => {
	render(
		<Router>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Router>
	);
});
