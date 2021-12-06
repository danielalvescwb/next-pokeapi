import { lighten } from "polished";
import { useTheme } from "styled-components";
import { Header } from "./Header";
import { Sections } from "./Sections";
import {
  CtnrPokemon,
  BodyPokemon,
  BodyCard,
  Pokeball,
  BodySection,
} from "./styles";
export function Pokemon({ pokemon }): JSX.Element {
  const theme = useTheme();
  let url: string;
  if (pokemon) {
    const {
      sprites: {
        other: {
          "official-artwork": { front_default },
        },
      },
    } = pokemon;
    url = front_default;
  }

  return (
    <>
      {pokemon && (
        <CtnrPokemon>
          <BodyPokemon bgColor={pokemon?.types[0].type.name}>
            <div>
              <Pokeball
                firstColor={lighten(
                  0.05,
                  `${theme.colors[pokemon?.types[0].type.name]}`
                )}
                secondColor={lighten(
                  0.05,
                  `${theme.colors[pokemon?.types[0].type.name]}`
                )}
              />
            </div>
            <div>
              <BodySection />
            </div>
            <BodyCard>
              <Header name={pokemon?.name} id={pokemon?.id} />
              <img src={url} alt={pokemon.name} />
              {/* <Sections /> */}
            </BodyCard>
          </BodyPokemon>
        </CtnrPokemon>
      )}
    </>
  );
}
