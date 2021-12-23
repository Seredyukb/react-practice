import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("Status from props should be in the state", () => {
    const component = create(<ProfileStatus status="NEW STATUS" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("NEW STATUS");
  });
  test("After creation span with status should be displayed", () => {
    const component = create(<ProfileStatus status="NEW STATUS" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span).not.toBeNull();
  });
  test("After creation span with status should be displayed with correct status", () => {
    const component = create(<ProfileStatus status="NEW STATUS" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children[0]).toBe("NEW STATUS");
  });
  test("After creation input with status shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="NEW STATUS" />);
    const root = component.root;
    expect(() => {
      let input = root.findByType("input");

    }).toThrow();
  });
  test("input shiould be displayed in EditMode instead of span", () => {
    const component = create(<ProfileStatus status="NEW STATUS" />);
    const root = component.root;
    const span = root.findByType("span");
    span.props.onDoubleClick();
    const input = root.findByType("input");
    expect(input.props.value).toBe("NEW STATUS");
  });
});