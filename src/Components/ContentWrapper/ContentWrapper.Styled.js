import styled from "styled-components";

import { colors } from "../../Styles/styles";
import { fonts } from "../../Styles/styles";

export const ContentWrapperStyled = styled.section`
  font-family: ${fonts.nunito};
  color: ${colors.white};
  width: 380px;
  margin-top: 7rem;

  p {
    color: #eee;
  }
  > p {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 4.5rem;
    line-height: 5rem;
    font-weight: 800;
  }
  article {
    margin-top: 1rem;
  }
`;
