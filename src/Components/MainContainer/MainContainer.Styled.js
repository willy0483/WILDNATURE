import styled from "styled-components";

export const MainContainerStyled = styled.section`
  position: relative;
  background-image: url(${(props) => props.bgimage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  padding: 0 4rem;
  transition: background-image 0.3s ease-in-out;

  &.animate {
    animation: fadeInAnimation ease 2.5s;
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }

  @keyframes fadeInAnimation {
    0% {
      opacity: 0.95;
    }

    100% {
      opacity: 1;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 1%,
      rgba(0, 0, 0, 0.5) 100%
    );
    z-index: 1;
  }
  > * {
    position: relative;
    z-index: 2;
  }
`;
