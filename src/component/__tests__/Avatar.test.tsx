import * as React from "react";
import { shallow } from "enzyme";
import Avatar from "../avatar/Avatar";

describe("Show Avatar", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Avatar />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should render avatar component successfully", () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.find("div.avatar")).toHaveLength(1);
    expect(wrapper.find("img")).toHaveLength(1);
  });
});
