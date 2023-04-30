import Button, { IButton } from "./Button";
// import styles from "./Button.module.scss";
// TODO: also can implement styled-components | css-in-JS
const ButtonStyled = ({
  size = "md",
  variant = "filled",
  className,
  ...rest
}: IButton) => {
  return (
    <Button
      className={[
        " font-medium",
        variant === "text"
          ? "hover:text-gray-700"
          : variant === "link"
          ? "hover:text-gray-700 underline"
          : variant === "filled"
          ? "bg-blue-600 hover:bg-blue-500 focus:bg-blue-500 text-white"
          : variant === "outlined"
          ? "bg-transparent border-2 border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white"
          : variant === "contained"
          ? "shadow-md  hover:text-gray-700"
          : "",
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
};
export default ButtonStyled;
