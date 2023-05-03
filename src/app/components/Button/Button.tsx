import { ICoreComponent } from "@/app/types";

export interface IButton extends ICoreComponent<HTMLButtonElement> {
  type?: "button" | "submit";
  disabled?: boolean;
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
