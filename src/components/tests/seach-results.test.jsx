import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import SearchResults from "../search-results";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const mockMovies = [{ name: "Star Wars" }];

describe("SearchResults component", () => {
  it("renders", () => {
    const wrapper = shallow(<SearchResults Movies={mockMovies} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("returns empty array when there is no data to map", () => {
    const wrapper = shallow(<SearchResults />);
    expect(wrapper).toMatchSnapshot();
  });

  it("doesn't break with no movies", () => {
    const wrapper = shallow(<SearchResults />);
    expect(wrapper.find("li")).toHaveLength(0);
  });
});
