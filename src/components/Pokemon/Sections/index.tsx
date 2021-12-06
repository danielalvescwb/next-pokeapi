import { ReactNode } from "react";
import { CtnrSections } from "./styles";

interface Iprops {
  children?: ReactNode;
}

export function Sections({ children }: Iprops): JSX.Element {
  return <CtnrSections>{children}</CtnrSections>;
}
