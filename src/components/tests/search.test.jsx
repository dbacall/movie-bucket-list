import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Search from "../search";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Search component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("echoes user input", () => {
    wrapper.find("input").simulate("change", {
      target: { value: "Film" }
    });
    expect(wrapper.find("input").props().value).toEqual("Film");
  });
});
