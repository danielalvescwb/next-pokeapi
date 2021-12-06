import styled from "styled-components";

export const CtnrPokedex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const BodyPokedex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 640px;
  width: 360px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 8px;
`;

export const BodyCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  overflow: auto;
  flex-wrap: wrap;
`;
