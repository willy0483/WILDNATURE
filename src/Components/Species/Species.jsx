import { SpeciesStyled } from "./Species.Styled";

export const Spicies = ({title,spiciesArticle}) =>{
        
    return(
        <SpeciesStyled>
            <h1>{title}</h1>
            <article>
                <p>{spiciesArticle}</p>
            </article>
        </SpeciesStyled>
    )
}