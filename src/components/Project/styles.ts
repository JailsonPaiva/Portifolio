import styled from "styled-components"

export const Container = styled.section`
    max-width: 100%;
    padding-top: 4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    span {
        margin-bottom: 3rem;

        display: inline-block;
        font-size: 1.4rem;
        border-bottom: 2px solid #000;
    }
`;

export const ContainerProject = styled.div`
  
    max-width: 100%;
    margin-bottom: 4rem;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    img {
        width: 32rem;
    }

    div {
        max-width: 40%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
    }


`;