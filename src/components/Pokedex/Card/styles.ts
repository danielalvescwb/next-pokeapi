import styled from "styled-components";
interface ICardProps {
  cardProps: {
    id: number;
    type: string;
    front_default: string;
  };
}
export const CtnrCard = styled.div<ICardProps>`
  display: flex;
  flex-direction: column;
  min-width: 104px;
  min-height: 112px;
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  margin: 4px;
  font-weight: 300;
  background-color: ${(props) => props.theme.colors.white};
  border-color: ${(props) => props.theme.colors[props.cardProps.type]};
  cursor: pointer;

  & > div:nth-child(1) {
    color: ${(props) => props.theme.colors[props.cardProps.type]};
    display: flex;
    justify-content: flex-end;
    height: 16px;
    font-size: 12px;
    margin-top: 4px;
    margin-right: 6px;
  }

  & > div:nth-child(2) {
    display: flex;
    justify-content: center;
    img {
      height: 72px;
      width: 72px;
    }
  }

  & > div:nth-child(3) {
    background-color: ${(props) => props.theme.colors[props.cardProps.type]};
    display: flex;
    justify-content: center;
    font-size: 12px;
    color: ${(props) => props.theme.colors.white};
    border-radius: 0 0 6px 6px;
  }
`;
