import styled from 'styled-components';

export const Container = styled.section `
    max-width: 100%;
    padding: 4rem 0;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    img { 
        width: 15rem;
    }

    div { 
        max-width:50%;

        h2 { 
            font-size: 2rem;
        }

        p {
            margin-top: 2rem;
            text-align: justify;
            font-size: 1.3rem;
        }
    }

`;