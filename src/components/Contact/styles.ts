import styled from "styled-components";


export const Container = styled.section `
    text-align: center;
    margin-top: 4rem;

    span {
        font-size: 1.4rem;
        border-bottom: 2px solid #000;
    }
`;

export const Grid = styled.div `
    max-width: 100%;
    height: 10rem;

    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    i { 
        font-size: 2rem;
        a { 
            margin-left: 1rem;
            font-size: 1rem;
        }

        a:hover { 
            border-bottom: 1px solid #000;
            padding-bottom: .4rem;
            transition: .3s ease-in-out;
        }
    }
`;

