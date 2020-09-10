import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";

import { findByTestAttr, checkProps } from "../test/testUtils";

const defaultProps = { success: false };

const setup = (secretWord = "party") => {
  return shallow(<Input secretWord={secretWord} />);
};

/**
 * Factory function to create a ShallowWrapper for the Congrats Component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
