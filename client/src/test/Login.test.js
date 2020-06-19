import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../components/Login";

test("it can render login page correctly", () => {
	render(
		<MemoryRouter>
			<Login />
		</MemoryRouter>
    );
    expect(screen.getByLabelText(/username/i))
});

test("it can type username and password ", () => {
	render(
		<MemoryRouter>
			<Login />
		</MemoryRouter>
	);
	let username = screen.getByLabelText(/username/i);
	let password = screen.getByLabelText(/password/i);

	fireEvent.change(username, {
		target: { name: "username", value: "Lambda School" },
	});

	fireEvent.change(password, {
		target: { name: "password", value: "i<3Lambd4" },
	});

	fireEvent.keyDown(password, {
		key: "Enter",
		code: "Enter",
	});
});
