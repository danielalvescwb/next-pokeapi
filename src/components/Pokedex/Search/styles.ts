import styled from "styled-components";
import { IconSearch } from "../../Icon/IconSearch";

interface Iprops {
  focusSearch: boolean;
}

export const CtnrSearch = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.mediumGray};
  border-color: ${({ theme }) => theme.colors.lightGray};
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  margin-bottom: 8px;
  width: 100%;

  & > div {
    width: 100%;
  }

  & input {
    width: 80%;
    padding: 5px;
    margin-left: 10%;
  }

  & button {
    width: 10%;
    padding: 5px;
  }
  & span {
    width: 10%;
    padding: 5px;
  }
`;

export const IconSearchSvg = styled(IconSearch)<Iprops>`
  margin-top: 8px;
  margin-left: ${(props) => (props.focusSearch ? "15px" : "120px")};
  position: absolute;
  width: 9px;
  height: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const Div = styled.div``;
