import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  noBorder?: boolean;
}

export function CardFooter({ children, noBorder, className, ...other }: CardProps): JSX.Element {
  return (
    <div className={"card-footer " + (noBorder ? "border-0 " : "") + className} {...other}>
      {children}
    </div>
  );
}
CardFooter.defaultProps = {
  type: "DKCardFooter",
};
