import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "./Card";
import { Header } from "./Header";
import { Search } from "./Search";
import { ShowMore } from "./ShowMore";
import { CtnrPokedex, BodyPokedex, BodyCard } from "./styles";
export function Pokedex({
  showMore,
  pokemons,
  sort,
  ChangeSort,
  setIsLoading,
  isLoading,
  handleSearch,
  cancelSearch,
}): JSX.Element {
  const [focusSearch, setFocusSearch] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
    reset,
    watch,
    setValue,
  } = useForm();
  function handleShowMore() {
    setIsLoading(true);
    showMore();
  }
  function handleCancelSearch() {
    reset();
    setValue("search", null);
    cancelSearch();
  }

  function hadleFocus() {
    setFocusSearch(true);
  }
  function handleBlur() {
    if (!watch("search")) {
      setFocusSearch(false);
    }
  }

  return (
    <>
      <CtnrPokedex>
        <BodyPokedex>
          <Header sort={sort} ChangeSort={ChangeSort} />
          <form onSubmit={handleSubmit(handleSearch)}>
            <Search focusSearch={focusSearch} setFocusSearch={setFocusSearch}>
              <input
                {...register("search")}
                type="text"
                placeholder="Search"
                required
                onFocus={() => hadleFocus()}
                onBlur={() => handleBlur()}
                autoFocus={focusSearch}
              />
              {watch("search") || isSubmitted ? (
                <button type="button" onClick={() => handleCancelSearch()}>
                  x
                </button>
              ) : (
                <span></span>
              )}
            </Search>
          </form>

          <BodyCard>
            {pokemons?.map(({ id, name, type, front_default }, i) => (
              <Card
                key={i}
                id={id}
                type={type}
                name={name}
                front_default={front_default}
              />
            ))}
          </BodyCard>
          {!isSubmitted && (
            <ShowMore onClick={handleShowMore} isLoading={isLoading}>
              {isLoading ? "Loading ..." : "Show more"}
            </ShowMore>
          )}
        </BodyPokedex>
      </CtnrPokedex>
    </>
  );
}
