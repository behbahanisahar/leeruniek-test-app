import * as React from "react";
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function CardBody({
  children,
  className,
  ...other
}: CardProps): JSX.Element {
  return <div className={className}>{children}</div>;
}
CardBody.defaultProps = {
  type: "DKCardBody",
};
