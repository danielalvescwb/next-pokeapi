import {
  CtnrHeader,
  Pokeball,
  Title,
  SortByNumber,
  SortByText,
} from "./styles";

export function Header({ sort, ChangeSort }): JSX.Element {
  return (
    <CtnrHeader>
      <div>
        <Pokeball />
        <Title>Pokedéx</Title>
      </div>
      <div>
        {sort === "name" && <SortByText onClick={ChangeSort} />}
        {sort === "id" && <SortByNumber onClick={ChangeSort} />}
      </div>
    </CtnrHeader>
  );
}
