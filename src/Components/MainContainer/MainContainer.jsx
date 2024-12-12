import { MainContainerStyled } from "./MainContainer.Styled";


export const MainContainer = ({children, bgimage}) =>{
    return(
        <MainContainerStyled bgimage={bgimage}>
            {children}
        </MainContainerStyled>
    )
}