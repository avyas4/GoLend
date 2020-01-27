import * as React from "react";
import { shallow } from "enzyme";
import data from "../../__mocks__/years.data.json";
import DashboardComponent from "../dashboard/DashboardComponent";
import Avatar from "../avatar/Avatar";

describe("Show list of years", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<DashboardComponent />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should render dashboard component successfully", () => {
    const wrapper = shallow(<DashboardComponent />);
    expect(wrapper.find("div.dashboardComponent")).toHaveLength(1);
    expect(wrapper.find(Avatar)).toHaveLength(1);
  });

  it("should render data successfully", () => {
    const exps = [
      2019,
      2018,
      2017,
      2016,
      2015,
      2014,
      2013,
      2012,
      2011,
      2010,
      2009,
      "I'll walk",
    ];
    expect(data).toEqual(exps);
  });

  it("Should render Avatar", () => {
    const wrapper = shallow(<DashboardComponent />);
    expect(wrapper.find(Avatar)).toHaveLength(1);
  });

  it("Should loop over input", () => {
    const wrapper = shallow(<DashboardComponent />);
    wrapper.find(".input").forEach((e, i) => {
      expect(e.type()).toEqual("button");
    });
  });
});
