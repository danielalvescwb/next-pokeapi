import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { GitHubCorner } from "../../components/GitHubCorner";
import { Pokemon } from "../../components/Pokemon";

export default function Id({ pokemon }) {
  return (
    <>
      <GitHubCorner projectUrl="https://github.com/danielalvescwb/next-pokeapi" />
      <Pokemon pokemon={pokemon} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;

  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return {
    props: {
      pokemon: response.data,
    },
    revalidate: 60 * 60,
  };
};
