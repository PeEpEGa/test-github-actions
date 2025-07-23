import Page from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Hello");
  });

  it("renders a welcome paragraph", () => {
    render(<Page />);
    const paragraph = screen.getByText(
      /welcome to our notary crm application/i
    );
    expect(paragraph).toBeInTheDocument();
  });

  //   it("renders a button and responds to click", () => {
  //     render(<Page />);
  //     const button = screen.getByRole("button", { name: /click me/i });
  //     expect(button).toBeInTheDocument();
  //     fireEvent.click(button);
  //     expect(screen.getByText(/you clicked the button/i)).toBeInTheDocument();
  //   });

  //   it("renders a list of services", () => {
  //     render(<Page />);
  //     const listItems = screen.getAllByRole("listitem");
  //     expect(listItems).toHaveLength(3);
  //     expect(listItems.map((li) => li.textContent)).toEqual([
  //       "Service A",
  //       "Service B",
  //       "Service C",
  //     ]);
  //   });
});
