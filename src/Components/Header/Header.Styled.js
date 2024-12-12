import styled from "styled-components";
import { colors } from "../../Styles/styles";
import { fonts } from "../../Styles/styles";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 0.4rem;
  h1 {
    font-family: ${fonts.nunito};
    color: ${colors.white};
    span {
      color: ${colors.orange};
    }
  }
  a {
    text-decoration: none;
  }
`;
