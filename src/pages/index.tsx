import axios from "axios";
import { useEffect } from "react";
import { GetServerSideProps } from "next";
import { Pokedex } from "../components/Pokedex";
import { GitHubCorner } from "../components/GitHubCorner";
import { useState } from "react";
import { parseCookies, setCookie } from "nookies";

interface IPokemon {
  id: number;
  name: string;
  type: string;
  front_default: string;
}

export default function Home({ pokemons }) {
  const [sort, setSort] = useState(() => INITIAL_sort());
  const [allPokemon, setAllPokemon] = useState<IPokemon[]>(() =>
    handleSort(INITIAL_allPokemon())
  );
  const [morePokemon, setMorePokemon] = useState(pokemons);
  const [limit] = useState(12);
  const [offset, setOffset] = useState(12);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    nextPokemonList();
  }, []);

  function handleSort(arrSort) {
    if (sort === "name") {
      return SortByName(arrSort);
    } else {
      return SortById(arrSort);
    }
  }

  function ChangeSort() {
    setSort((prevstate) => {
      if (prevstate === "name") {
        setAllPokemon(SortById(allPokemon));
        setCookie(null, "next-pokeapi.sort", "id", {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: "/",
        });
        return "id";
      }
      setAllPokemon(SortByName(allPokemon));
      setCookie(null, "next-pokeapi.sort", "name", {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });
      return "name";
    });
  }

  function SortById(arrSort) {
    if (Array.isArray(arrSort)) {
      arrSort = uniqueArray(arrSort);

      return arrSort.sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    }
  }

  function SortByName(arrSort) {
    if (Array.isArray(arrSort)) {
      arrSort = uniqueArray(arrSort);

      return arrSort.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    }
  }

  function uniqueArray(arr: IPokemon[]) {
    if (Array.isArray(arr)) {
      const id = [];
      const newArr = arr.filter((item) => {
        if (id.includes(item.id)) return false;
        id.push(item.id);
        return true;
      });
      return newArr;
    }
  }

  function nextPokemonList() {
    getPokemonList({ limit, offset }).then((pokemonList) => {
      setOffset((prevState) => prevState + limit);
      if (pokemonList?.results?.length > 0) {
        getPokemonDetail({
          pokemonResults: pokemonList.results,
        }).then((nextList) => {
          setIsLoading(false);
          setMorePokemon(nextList);
        });
      }
    });
  }

  function showMore() {
    setAllPokemon((prevState) => {
      localStorage.setItem(
        "pokemons",
        JSON.stringify(handleSort([...prevState, ...morePokemon]))
      );
      return handleSort([...prevState, ...morePokemon]);
    });
    nextPokemonList();
  }

  function getStorageIsValid(): boolean {
    const { "next-pokeapi.storageisvalid": storagevalid } = parseCookies();
    return !!storagevalid;
  }

  function refreshCookieStorageIsValid() {
    setCookie(null, "next-pokeapi.storageisvalid", "valid", {
      maxAge: 60 * 60 * 24 * 1, // 1 day
      path: "/",
    });
  }

  async function handleSearch(dataSubmit) {
    const { search } = dataSubmit;

    let searchParsed;
    if (!isNaN(search)) {
      searchParsed = parseInt(search);
    } else {
      searchParsed = search.toLowerCase();
    }
    const pokemonInState = allPokemon.filter(({ id, name }) => {
      if (id === search) return true;
      if (name === search) return true;
      return false;
    });

    if (pokemonInState.length > 0) {
      setAllPokemon(pokemonInState);
      return;
    }

    const searchPokemon = await getPokemonSearch({
      idOrName: search,
    });
    setAllPokemon(searchPokemon);
    const pokemonsStorage = localStorage.getItem("pokemons");
    const pokemonsStorageParse = JSON.parse(pokemonsStorage);
    localStorage.setItem(
      "pokemons",
      JSON.stringify(handleSort([...pokemonsStorageParse, ...searchPokemon]))
    );
  }

  function cancelSearch() {
    setAllPokemon((prevState) =>
      handleSort([...INITIAL_allPokemon(), ...prevState])
    );
  }

  function INITIAL_allPokemon() {
    if (typeof window !== "undefined") {
      const storageIsValid = getStorageIsValid();
      if (storageIsValid) {
        const pokemonsStorage = localStorage.getItem("pokemons");
        refreshCookieStorageIsValid();
        return JSON.parse(pokemonsStorage);
      } else {
        refreshCookieStorageIsValid();
        localStorage.setItem("pokemons", JSON.stringify(pokemons));
        return pokemons;
      }
    }
  }
  function INITIAL_sort() {
    if (typeof window !== "undefined") {
      const { "next-pokeapi.sort": sort } = parseCookies();
      return sort;
    }
  }

  return (
    <>
      <GitHubCorner projectUrl="https://github.com/danielalvescwb/next-pokeapi" />
      <Pokedex
        pokemons={allPokemon}
        showMore={showMore}
        sort={sort}
        ChangeSort={ChangeSort}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        handleSearch={handleSearch}
        cancelSearch={cancelSearch}
      ></Pokedex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "next-pokeapi.storageisvalid": pokemonInStorage } = parseCookies(ctx);
  const { "next-pokeapi.sort": sort } = parseCookies(ctx);
  if (!sort)
    setCookie(ctx, "next-pokeapi.sort", "name", {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });

  if (pokemonInStorage) {
    return {
      props: { pokemons: [] },
    };
  }
  const pokemon = await getPokemonList({ limit: 12, offset: 0 });
  let pokemons = [];
  if (pokemon?.results?.length > 0) {
    pokemons = await getPokemonDetail({
      pokemonResults: pokemon.results,
    });
  }

  return {
    props: { pokemons },
  };
};

async function getPokemonList({ limit, offset }) {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  return data;
}

async function getPokemonSearch({ idOrName }) {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${idOrName}`
    );
    return [filterFields(data)];
  } catch (error) {
    console.log(error);
  }
  return [];
}

async function getPokemonDetail({ pokemonResults }) {
  const pokemons = [];
  let While = true;
  let count = 0;
  while (While) {
    const { data } = await axios.get(pokemonResults[count].url);
    pokemons.push(filterFields(data));
    count++;
    if (pokemonResults.length === count) While = false;
  }
  return pokemons;
}

function filterFields(data) {
  const {
    id,
    name,
    types,
    sprites: {
      other: {
        "official-artwork": { front_default },
      },
    },
  } = data;
  return { id, name, type: types[0].type.name, front_default };
}
