import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas:
    "header"
    "content"
    ;

    > main {
        grid-area: content;
        padding: 3.8rem 0 0;
        overflow-y: auto;
    }
`;

export const Form = styled.form`
    max-width: 55rem;
    margin: 3.8rem auto;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 3.6rem;

        h1 {
            font-size: 3.6rem;
            line-height: 47px;
            font-weight: 500;
        }

        a {
            font-size: 2rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

    .tags {
        display: grid;
        grid-template-columns: 50% 50%;
        gap: 0.8rem;
    }

`;
