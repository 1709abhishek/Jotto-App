import React from "react";
import { shallow } from "enzyme";
import App from "./App";

import { findByTestAttr } from "../test/testUtils";

const defaultProps = { success: false };

const setup = () => {
  return shallow(<App />);
};

/**
 * Factory function to create a ShallowWrapper for the Congrats Component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */

test("App renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});
