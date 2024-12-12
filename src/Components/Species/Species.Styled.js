import styled from "styled-components";
import { colors } from "../../Styles/styles";
import { fonts } from "../../Styles/styles";

export const SpeciesStyled = styled.section`
  font-family: ${fonts.nunito};
  margin-top: 5rem;
  width: 400px;
  h1 {
    color: ${colors.white};
    font-size: 3rem;
  }
  article {
    margin-top: 1rem;
    p {
      color: #eee;
      font-size: 1.5rem;
    }
  }
`;
