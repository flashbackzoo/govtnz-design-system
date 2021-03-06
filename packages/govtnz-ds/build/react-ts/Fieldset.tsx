import * as React from "react";

type Props = {
  hintId?: string | undefined;
  children?: React.ReactNode;
};

const Fieldset = ({ hintId, children }: Props) => (
  <div className="g-fieldset-form-group">
    <fieldset aria-describedby={hintId} className="g-fieldset">
      {children !== undefined ? (
        children
      ) : (
        <React.Fragment>Legend and other fieldset contents...</React.Fragment>
      )}
    </fieldset>
  </div>
);
Fieldset.props = ["hintId", "children"];
export default Fieldset;
