import { HeaderStyled } from "./Header.Styled";
import { NavBar } from "../NavBar/NavBar";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <HeaderStyled>
            <div>
                <Link to="/"><h1><span>WILD</span>NATURE</h1></Link>
            </div>
            <NavBar/>
        </HeaderStyled>
    )
}