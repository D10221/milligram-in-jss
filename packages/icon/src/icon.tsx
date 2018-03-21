import * as React from "react";
import classNames from "classnames";
/**
 *
 * @param props
 */
const Icon: React.StatelessComponent<
  React.HTMLAttributes<HTMLElement> & {
    className?: string | (string[]);
  }
> = props => {
  const { children, className, ...rest } = props;
  return (
    <i className={classNames("material-icons", className)} {...rest}>
      {children}
    </i>
  );
};
export default Icon;
