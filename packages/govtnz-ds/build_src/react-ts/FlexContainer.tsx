import * as React from "react";

type Props = {
  width: "fixed" | "fluid";
  children?: React.ReactNode;
};

const constants = {
  width: { fixed: "g-flex-container", fluid: "g-flex-container-fluid" }
};

const FlexContainer = ({ width, children }: Props) => (
  <div
    className={
      constants.width[width] !== undefined ? constants.width[width] : ""
    }
  >
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Rows...</React.Fragment>
    )}
  </div>
);
FlexContainer.props = ["width", "children"];
export default FlexContainer;
