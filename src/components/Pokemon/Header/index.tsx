import Router from "next/router";
import { CtnrHeader, ArrowLeft, Title } from "./styles";

export function Header({ name, id }): JSX.Element {
  function hanldleClick() {
    Router.push(`/#${id}`);
  }
  return (
    <CtnrHeader>
      <div>
        <ArrowLeft onClick={hanldleClick} />
        <Title>{`${name?.charAt(0).toUpperCase()}${name?.slice(1)}`}</Title>
      </div>
      <div>{`#${id?.toString().padStart(3, "0")}`}</div>
    </CtnrHeader>
  );
}
