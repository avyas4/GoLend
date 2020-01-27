import * as React from "react";
import { shallow } from "enzyme";
import Properties from "../properties/Properties";

describe("Show Properties", () => {
  const Object = {
    model: "Ascent",
    series: "Sport",
    variant: "Ascent Sport Sedan 4dr Spts Auto 6sp 2.5i",
    new_price: 30590,
    from: 625,
  };
  const defaultProps = {
    data: Object,
    year: "",
  };
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Properties {...defaultProps} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should render properties component successfully", () => {
    const wrapper = shallow(<Properties {...defaultProps} />);
    expect(wrapper.find("section.Properties")).toHaveLength(1);
  });

  it("should render car image", () => {
    const wrapper = shallow(<Properties {...defaultProps} />);
    expect(wrapper.find("img")).toHaveLength(1);
  });

  it("should render article ", () => {
    const wrapper = shallow(<Properties {...defaultProps} />);
    expect(wrapper.find("article")).toHaveLength(1);
    expect(wrapper.find(".Properties__price")).toHaveLength(2);
  });
});
