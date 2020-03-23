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
});
