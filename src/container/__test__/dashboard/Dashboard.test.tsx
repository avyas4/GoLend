import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import DashboardComponent from "../../../component/dashboard/DashboardComponent";
import Dashboard from "../../dashboard/Dashboard";
import HeaderComponent from "../../../component/header/Header";

describe("Show list of years", () => {
  let DashboardWrapper: ShallowWrapper;
  beforeEach(() => {
    DashboardWrapper = shallow(<Dashboard />);
  });

  it("should render header component successfully", () => {
    expect(DashboardWrapper.find(HeaderComponent)).toHaveLength(1);
  });

  it("should render dashboard component successfully", () => {
    expect(DashboardWrapper.find(DashboardComponent)).toHaveLength(1);
  });
});
