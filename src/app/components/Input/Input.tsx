import { ICoreComponent } from "@/app/types";
import { Ref, forwardRef } from "react";

export interface IInput extends ICoreComponent<HTMLInputElement> {
  ref?: Ref<HTMLInputElement>;
}
const Input = forwardRef(function FowardedInput({
  ref,
  size,
  ...rest
}: IInput) {
  return (
    <>
      <input ref={ref} {...rest} />
    </>
  );
});
export default Input;
