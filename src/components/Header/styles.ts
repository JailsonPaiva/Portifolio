// import styled from "styled-components";
import styled from  "styled-components"

export const Container = styled.header `
    max-width: 100%;

    background-color: #819EE8;
`;

export const Ul = styled.ul `
    max-width: 100%;
    height: 4rem;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    list-style-type: none;

    font-size: 1.5rem;
    
    div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 1rem;
        
    }
    
    a:hover { 
        border-bottom: 1px solid #000;
        padding-bottom: .4rem;
        transition: .3s ease-in-out;
    }
    
`;