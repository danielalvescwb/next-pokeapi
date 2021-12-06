import styled from "styled-components";
import { IconPokeball } from "../../Icon/IconPokeball";
import { IconSortByNumber } from "../../Icon/IconSortByNumber";
import { IconSortByText } from "../../Icon/IconSortByText";

export const CtnrHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 8px;
  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: start;
  }

  & > div:nth-child(2) {
    padding-right: 8px;
    padding-top: 8px;
  }
`;

export const Pokeball = styled(IconPokeball)`
  width: 24px;
  height: 32px;
  margin-right: 16px;
`;

export const SortByNumber = styled(IconSortByNumber)`
  width: 20px;
  height: 32px;
  cursor: pointer;
`;

export const SortByText = styled(IconSortByText)`
  width: 20px;
  height: 32px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-weight: 600;
`;
