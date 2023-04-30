import { CoreComponentProps } from "@/app/types";

export interface IButton extends CoreComponentProps<HTMLButtonElement> {
  variant?: "filled" | "text" | "link" | "contained" | "outlined";
}
const Button = ({ children, ...rest }: IButton) => {
  return (
    <>
      <button {...rest}>{children}</button>
    </>
  );
};
export default Button;
