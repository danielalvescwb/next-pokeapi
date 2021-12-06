import styled from "styled-components";
import { IconArrowLeft } from "../../Icon/IconArrowLeft";

export const CtnrHeader = styled.div`
  z-index: 2;
  padding: 24px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div:nth-child(1) {
    display: flex;
    align-items: center;
  }

  & > div:nth-child(2) {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ArrowLeft = styled(IconArrowLeft)`
  width: 18px;
  height: 18px;
  margin-right: 16px;
  cursor: pointer;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
`;
