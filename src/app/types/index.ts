import { HTMLAttributes, ReactNode } from "react"

export interface CoreComponentType {
  size?: 'sm' | 'md' | 'lg';
  name?: string;
  children? : ReactNode;
  ref?: React.ForwardedRef<any>
}
export interface ICoreComponent<T> extends CoreComponentType, HTMLAttributes<T> {}