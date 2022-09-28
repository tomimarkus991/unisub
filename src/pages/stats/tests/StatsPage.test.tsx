import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { StatsPage } from "pages";
import { render, screen } from "test/test-utils";

describe("StatsPage tests", () => {
  it("the title is visible", () => {
    render(
      <MemoryRouter>
        <StatsPage />
      </MemoryRouter>
    );
    expect(screen.getByText(/Stats page/i)).toBeInTheDocument();
  });
});
