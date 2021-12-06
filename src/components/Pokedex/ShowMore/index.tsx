import { ReactNode, ButtonHTMLAttributes } from "react";
import { CtnrShowMore } from "./styles";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  isLoading: boolean;
}

export function ShowMore({
  children,
  isLoading,
  ...rest
}: Iprops): JSX.Element {
  return (
    <CtnrShowMore isLoading={isLoading} {...rest} disabled={isLoading}>
      {children}
    </CtnrShowMore>
  );
}
