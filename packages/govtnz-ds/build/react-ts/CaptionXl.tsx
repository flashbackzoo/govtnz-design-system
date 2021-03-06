import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

const CaptionXl = ({ children }: Props) => (
  <span className="g-caption-xl">
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </span>
);
CaptionXl.props = ["children"];
export default CaptionXl;
