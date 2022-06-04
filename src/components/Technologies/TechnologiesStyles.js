import styled from 'styled-components';

export const List = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 40px;
    margin: 3rem 0;
    
    @media ${props=> props.theme.breakpoints.lg} {
        margin: 64px 0;
    }

    @media ${props=> props.theme.breakpoints.md} {
        margin: 64px 0;
        gap: 24px;
    }


    @media ${props=> props.theme.breakpoints.sm} {
        display: flex;
        flex-direction: column;
        margin: 32px 0;
    }
`

export const ListContainer = styled.div`
    display:flex;
    flex-direcion: column;

    @media ${props => props.theme.breakpoints.sm} {
        display: flex;
        margin-left: 20px;
    }
`

export const ListTitle = styled.h4`
    font-size: 30px;
    font-weight: 600;
    line-height: 30px;
    color: #fff;
    letter-spacing: 0.02em;
    margin-bottom: 10px;

    @media ${props => props.theme.breakpoints.md} {
        font-size: 24px;
        ling-height: 28px;
    }

    @media ${props => props.theme.breakpoints.sm} {
        font-size: 20px;
        ling-height: 28px;
        margin-bottom: 4px;
        letter-spacing: 0.02em;
    }

`