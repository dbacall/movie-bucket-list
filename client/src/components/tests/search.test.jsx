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
    wrapper = shallow(<Search performSearch={() => {}} />);
    wrapper.find("input").simulate("change", {
      target: { value: "Film" }
    });
    expect(wrapper.find("input").props().value).toEqual("Film");
  });

  it("cancels the event when submit", () => {
    let prevented = false;
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {
        prevented = true;
      }
    });
    expect(prevented).toBe(true);
  });

  it("renders search results when the movies change", () => {
    wrapper = mount(<Search movies={[]} />);
    console.log(wrapper.props());
    wrapper.setProps({
      movies: [{ title: "Star Wars" }]
    });
    expect(wrapper.find("li").props().children).toContain("Star Wars");
  });
});
