import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import HeaderComponent from "../../../component/header/Header";
import { VehiclesInfo } from "../../vehicles/VehiclesInfo";
import { createMemoryHistory } from "history";
import VehiclesComponent from "../../../component/vehicles/VehiclesComponent";

describe("Show Vehicles info", () => {
  let VehiclesInfoWrapper: ShallowWrapper;
  const defaultProps = {
    history: createMemoryHistory(),
    location: { pathname: "/years", search: "", state: "", hash: "" },
    match: {
      params: { year: "2019" },
      isExact: true,
      path: "/years",
      url: "/years",
    },
    year: "",
  };
  beforeEach(() => {
    VehiclesInfoWrapper = shallow(<VehiclesInfo {...defaultProps} />);
  });

  it("should render header component successfully", () => {
    expect(VehiclesInfoWrapper.find(HeaderComponent)).toHaveLength(1);
  });

  it("should render Vehicles component successfully", () => {
    expect(VehiclesInfoWrapper.find(VehiclesComponent)).toHaveLength(1);
  });
});
