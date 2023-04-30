import Button, { IButton } from "./Button";
// import styles from "./Button.module.scss";
// TODO: also can implement styled-components css-in-JS
const ButtonStyled = ({ size = "md", className, ...rest }: IButton) => {
  return (
    <Button
      className={[
        "bg-blue-600 hover:bg-blue-500 focus:bg-blue-500 text-white font-medium",
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
