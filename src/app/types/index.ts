import { HTMLAttributes, ReactNode } from "react"

export interface CoreComponentType {
  size?: 'sm' | 'md' | 'lg';
  children? : ReactNode;
}
export interface ICoreComponent<T> extends CoreComponentType, HTMLAttributes<T> {}