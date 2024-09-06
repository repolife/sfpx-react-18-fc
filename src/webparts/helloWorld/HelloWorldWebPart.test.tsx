import { vi, describe } from "vitest";

vi.mock("HelloWorldWebPartStrings", () => {
  return {
    PropertyPaneDescription: "Description",
  };
  {
    virtual: true;
  }
});

describe("");

