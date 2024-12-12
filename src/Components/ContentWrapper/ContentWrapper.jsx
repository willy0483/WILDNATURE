import { ContentWrapperStyled } from "./ContentWrapper.Styled";

export const ContentWrapper = ({theme,title,children}) => {

    document.title = title;

    return (
        <ContentWrapperStyled>
        <p>{theme}</p>
        <h1>{title}</h1>
        <article>{children}</article>
        </ContentWrapperStyled>
    )
}