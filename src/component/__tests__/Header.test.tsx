import * as React from "react";
import { shallow } from "enzyme";
import HeaderComponent from "../header/Header";

describe("Show Header", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<HeaderComponent />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should render header component successfully", () => {
    const wrapper = shallow(<HeaderComponent />);
    expect(wrapper.find("header.headerComponent")).toHaveLength(1);
    expect(wrapper.find("img")).toHaveLength(2);
    expect(wrapper.find("li")).toHaveLength(2);
  });
});
