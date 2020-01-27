import * as React from "react";
import { shallow } from "enzyme";
import Avatar from "../avatar/Avatar";
import VehiclesComponent from "../vehicles/VehiclesComponent";

describe("Show Vehicles", () => {
  const defaultProps = {
    year: "",
  };
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<VehiclesComponent {...defaultProps} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should render Vehicles component successfully", () => {
    const wrapper = shallow(<VehiclesComponent {...defaultProps} />);
    expect(wrapper.find("div.vehiclesComponent")).toHaveLength(1);
    expect(wrapper.find(Avatar)).toHaveLength(1);
  });

  it("Should render Avatar", () => {
    const wrapper = shallow(<VehiclesComponent {...defaultProps} />);
    expect(wrapper.find(Avatar)).toHaveLength(1);
  });

  it("Should have properties div", () => {
    const wrapper = shallow(<VehiclesComponent {...defaultProps} />);
    expect(wrapper.find("div.vehiclesComponent__properties")).toHaveLength(2);
  });
});
