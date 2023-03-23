import styled from "styled-components";

import backgroundImg from "../../assets/background.png"


export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 13.6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;

    > h1{
        color: ${({ theme }) => theme.COLORS.ORANGE};
        font-size: 4.8rem;
    }

    > p{
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > h2 {
        margin: 4.8rem 0;

        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > a {
        margin-top: 12.4rem;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center;
    background-size: cover;
    opacity: 0.3;
`;