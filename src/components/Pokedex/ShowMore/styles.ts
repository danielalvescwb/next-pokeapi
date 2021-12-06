import styled from "styled-components";

interface IButton {
  isLoading: boolean;
}

export const CtnrShowMore = styled.button<IButton>`
  cursor: ${(props) => (props.isLoading ? "not-allowed" : "pointer")};
  background-color: ${({ theme }) => theme.colors.ice};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
`;
