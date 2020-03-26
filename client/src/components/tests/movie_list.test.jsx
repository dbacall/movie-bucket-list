import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import MovieList from "../movie-list";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("MovieList component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MovieList />);
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("has heading", () => {
    expect(wrapper.find("h2").text()).toEqual("Movie List");
  });

  it("shows the first movie", () => {
    wrapper = mount(<MovieList />);
    wrapper.setState({ movies: [{ title: "Harry Potter" }] });
    expect(
      wrapper
        .find("li")
        .first()
        .text()
    ).toEqual("Harry Potter");
  });
});
