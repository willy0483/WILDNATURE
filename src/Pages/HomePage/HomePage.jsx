import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"

export const HomePage = ({title,theme,article}) => {

    return (
        <ContentWrapper title={title} theme={theme}>
            <p>{article}</p>
        </ContentWrapper>
    )
}