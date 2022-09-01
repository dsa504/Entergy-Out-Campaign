import { render, screen } from "@testing-library/react";

// import React from "react";
import EntergyApp from "./EntergyApp";

test("renders learn react link", () => {
	render(<EntergyApp />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
