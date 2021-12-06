import styled from "styled-components";
import { IconPokeball } from "../Icon/IconPokeball";

interface HeaderProps {
  bgColor: string;
}

export const CtnrPokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const BodyPokemon = styled.div<HeaderProps>`
  background-color: ${(props) => props.theme.colors[props.bgColor]};
  display: flex;
  flex-direction: column;
  height: 640px;
  width: 360px;
  border-radius: 12px;
  padding: 8px;

  & > div:nth-child(1) {
    display: flex;
    justify-content: end;
  }

  & > div:nth-child(2) {
    display: flex;
    justify-content: center;
  }
`;

export const BodyCard = styled.div`
  max-width: 360px;
  position: absolute;
  display: flex;
  justify-content: center;
  overflow: auto;
  flex-wrap: wrap;
  & > img:nth-child(2) {
    height: 200px;
    width: 200px;
    z-index: 3;
  }
`;

export const Pokeball = styled(IconPokeball)`
  z-index: 1;
  width: 208px;
  height: 208px;
  margin-bottom: 4px;
`;

export const BodySection = styled.div`
  width: 352px;
  height: 412px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
`;
