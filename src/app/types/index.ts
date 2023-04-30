import { HTMLAttributes, ReactNode } from "react"

export type CoreComponentProps<T> = 
HTMLAttributes<T> & {
  size?: 'sm' | 'md' | 'lg';
  children? : ReactNode;
}