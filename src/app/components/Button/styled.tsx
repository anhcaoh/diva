import Button, { IButton } from "./Button";
import styles from "./Button.module.scss";
// TODO: also can implement styled-components css-in-JS
const ButtonStyled = (props: IButton) => {
  return <Button className={styles.button} {...props} />;
};
export default ButtonStyled;
