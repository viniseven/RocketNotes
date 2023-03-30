import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 14.4rem;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;

        padding: 0 12.4rem;

        button{
            background: none;
            border: none;
        }

        svg {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 3.6rem;
        }
    }
`;

export const Avatar = styled.div`
    position: relative;
    
    margin: -12rem auto 3.2rem;

    width: 18.6rem;
    height: 18.6rem;

    > img {
        border-radius: 50%;

        width: 18.6rem;
        height: 18.6rem;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;

        background-color: ${({ theme }) => theme.COLORS.ORANGE};

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: -0.7rem;
        right: 1rem;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 2rem;
            height: 2rem;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }
    }
`;

export const Form = styled.form`
    max-width: 34rem;
    margin: 3rem auto 0;

    > div:nth-child(4){
        margin-top: 2.4rem;
    }
`;

