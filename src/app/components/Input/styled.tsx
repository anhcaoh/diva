import { forwardRef } from "react";
import Input, { IInput } from "./Input";
// import styles from "./Input.module.scss";
// TODO: also can implement styled-components | css-in-JS
const InputStyled = forwardRef(function InputStyled({
  size = "md",
  className,
  ...rest
}: IInput) {
  return (
    <Input
      className={[
        "font-medium outline-none shadow-md",
        size === "lg"
          ? "py-1 px-3 rounded-md text-lg"
          : size === "sm"
          ? "px-1 rounded-sm text-sm"
          : "py-1 px-2 rounded-md",
        className ?? "",
      ]
        .join(" ")
        .trim()}
      {...rest}
    />
  );
});
export default InputStyled;
