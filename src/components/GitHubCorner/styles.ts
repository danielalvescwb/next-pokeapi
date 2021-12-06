import styled from "styled-components";

export const A = styled.a`
  position: fixed;
  height: 80px;
  width: 80px;
  top: 0;
  border: 0;
  right: 0;
  z-index: 1;
`;

export const Svg = styled.svg`
  fill: ${({ theme }) => theme.colors.background};
  color: purple;
  cursor: pointer;
  height: 80px;
  width: 80px;
`;
