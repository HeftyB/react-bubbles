import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BubblePage from "../components/BubblePage";
import { fetchData as mockFetchData } from "../protected/fetchData";

// jest.mock("../protected/fetchData");

const colors = [
	{
		color: "aliceblue",
		code: {
			hex: "#f0f8ff",
		},
		id: 1,
	},
	{
		color: "limegreen",
		code: {
			hex: "#99ddbc",
		},
		id: 2,
	},
	{
		color: "aqua",
		code: {
			hex: "#00ffff",
		},
		id: 3,
	},
	{
		color: "aquamarine",
		code: {
			hex: "#7fffd4",
		},
		id: 4,
	},
	{
		color: "lilac",
		code: {
			hex: "#9a99dd",
		},
		id: 5,
	},
	{
		color: "softpink",
		code: {
			hex: "#dd99ba",
		},
		id: 6,
	},
	{
		color: "bisque",
		code: {
			hex: "#dd9a99",
		},
		id: 7,
	},
	{
		color: "softyellow",
		code: {
			hex: "#dcdd99",
		},
		id: 8,
	},
	{
		color: "blanchedalmond",
		code: {
			hex: "#ffebcd",
		},
		id: 9,
	},
	{
		color: "blue",
		code: {
			hex: "#6093ca",
		},
		id: 10,
	},
	{
		color: "blueviolet",
		code: {
			hex: "#8a2be2",
		},
		id: 11,
	},
];

test("it renders the component correctly", async () => {
	// mockFetchData.mockResolvedValueOnce(colors);
	render(
		<MemoryRouter>
			<BubblePage />
		</MemoryRouter>
	);
	
	screen.getByText(/colors/i);
	screen.findAllByText(/blue/i);
});


