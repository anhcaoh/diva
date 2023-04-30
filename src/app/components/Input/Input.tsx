import { ICoreComponent } from "@/app/types";

export interface IInput extends ICoreComponent<HTMLInputElement> {}
const Input = ({ size, ...rest }: IInput) => {
  return (
    <>
      <input {...rest} />
    </>
  );
};
export default Input;
