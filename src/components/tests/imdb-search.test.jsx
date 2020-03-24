import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import MovieList from "../movie-list";
import Adapter from "enzyme-adapter-react-16";
import ImdbSearch from "../imdb-search";
import Search from "../search";

Enzyme.configure({ adapter: new Adapter() });

// jest.mock("../../api");

describe("ImdbSearch Component", () => {
  it("renders", () => {
    const wrapper = shallow(<ImdbSearch />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the search component as a child", () => {
    const wrapper = mount(<ImdbSearch />);
    expect(wrapper.children(Search)).toHaveLength(1);
  });

  // it("updates movies state", () => {
  //   const wrapper = mount(<ImdbSearch />);
  //   expect(wrapper.state().movies).toEqual([]);
  //   const { performSearch } = wrapper.find(Search).props();
  //   return performSearch().then(() => {
  //     expect(wrapper.state().movies).toHaveLength(10);
  //   });
  // });
});
