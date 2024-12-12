import { LogoStyled } from "./Logo.Styled";
import image from "../../Assets/bear.svg"

export const Logo = () =>{
    return(
        <LogoStyled>
            <img src={image} alt="bear" />
        </LogoStyled>
    )
}