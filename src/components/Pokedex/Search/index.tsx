import { CtnrSearch, Div, IconSearchSvg } from "./styles";

export function Search({
  setFocusSearch,
  focusSearch,
  children,
  ...rest
}): JSX.Element {
  return (
    <CtnrSearch {...rest}>
      <Div onClick={() => setFocusSearch(true)}>
        <IconSearchSvg focusSearch={focusSearch} />
      </Div>
      {children}
    </CtnrSearch>
  );
}
