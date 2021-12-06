import { CtnrCard } from "./styles";
import Router from "next/router";

export function Card({ id, name, type, front_default }): JSX.Element {
  function hanldleClick(id) {
    Router.push(`/pokemon/${id}`);
  }
  return (
    <CtnrCard
      id={id}
      cardProps={{ id, type, front_default }}
      onClick={() => hanldleClick(id)}
    >
      <div>{`#${id.toString().padStart(3, "0")}`}</div>
      <div>
        <img src={front_default} alt={name} />
      </div>
      <div>{`${name.charAt(0).toUpperCase()}${name.slice(1)}`}</div>
    </CtnrCard>
  );
}
