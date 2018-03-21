import * as React from "react";
/**
 * 
 * @param props 
 */
const Icon: React.StatelessComponent<
  React.HTMLAttributes<HTMLElement>
> = props => {
  const { children, ...rest } = props;
  return (
    <i className="material-icons" {...rest}>
      {children}
    </i>
  );
};
export default Icon;
