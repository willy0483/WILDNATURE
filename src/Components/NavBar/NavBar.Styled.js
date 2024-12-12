import styled from "styled-components";
import { colors } from "../../Styles/styles";
import { mixins } from "../../Styles/styles";

export const NavBarStyled = styled.nav`
  ${mixins.resetList}
  display: flex;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    position: relative;
    margin-right: 1rem;

    a {
      ${mixins.resetLink}
      color: ${colors.white};
      padding: 1rem 1rem 0.8rem 1rem;
      text-transform: uppercase;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: ${colors.orange};
        transition: width 0.5s;
      }

      &:hover::after {
        width: 100%;
      }

      &.active::after {
        width: 100%;
      }
    }
  }
`;
