import styled from "styled-components";
import { colors } from "../../Styles/styles";

export const SideBarStyled = styled.aside`
  width: 5%;
  background-color: ${colors.orange};

  ul {
    list-style-type: none;
    padding: 0;
    margin: 13rem 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      background-color: #fff;
      opacity: 0.5;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      margin: 0.5rem 0;
      &.active {
        opacity: 1;
        transform: scale(1.2);
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
