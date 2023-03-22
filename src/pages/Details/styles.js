import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: 
    "header"
    "content";

    > main{
        grid-area: content;
        overflow-y: scroll;
        padding: 6.4rem 2rem;
    }
`;

export const Links = styled.ul`
    list-style: none;

    > li{
        margin-top: 1.2rem;

        a {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Content = styled.div`
    max-width: 55rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    > button:first-child {
        align-self: end;

        margin-bottom: 6.4rem;
    }

    > h1 {
        font-weight: 500;
        font-size: 3.6rem;
        line-height: 4.7rem;
        color: ${({ theme }) => theme.COLORS.WHITE};

        margin-bottom: 1.6rem;
    }

    > p {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.9rem;
        text-align: justify;
    } 
`;