import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import App from "./App";

describe("Given App component", () => {
    describe("When we render the component", () => {
        test("Then it should display the title", () => {
            render(
                <Router>
                    <App />
                </Router>
            );

            const element = screen.getByText("React");
            expect(element).toBeInTheDocument();
        });
    });
});
