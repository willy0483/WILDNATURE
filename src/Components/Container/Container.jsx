import { ContainerStyled } from "./Container.Styled"

export const Container = ({children , width, backgcolor , display}) =>{
    return (
        <ContainerStyled width={width} backgcolor={backgcolor} display={display}>
            {children}
        </ContainerStyled>
    )
}