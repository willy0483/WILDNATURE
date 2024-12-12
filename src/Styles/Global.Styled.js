import { createGlobalStyle } from "styled-components";
import { mixins } from "./styles";

export const GlobalStyled = createGlobalStyle`

    *{
        ${mixins.resetGlobal}
    }


`;
