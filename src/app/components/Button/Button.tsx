import { ReactNode } from "react";

type ButtonAttrs = React.HTMLAttributes<HTMLButtonElement>;
export interface IButton extends ButtonAttrs {
  children?: ReactNode;
  size?: 'sm' | 'md' | 'lg'
}
const Button = ({ children, ...rest }: IButton) => {
  return (
    <>
      <button {...rest}>{children}</button>
    </>
  );
};
export default Button;
