import styled from 'styled-components';

export const List = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(1,1fr);
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


export const ListTitle = styled.h4`
    font-size: 20px;
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
        font-size: 18px;
        ling-height: 28px;
        margin-bottom: 4px;
        letter-spacing: 0.02em;
    }

`


export const ListRow = styled.li`
    max-width: 90vw;
    display:grid;
    grid-template-columns:auto auto auto auto;
    height: 120px;
    justify-content: space-evenly;
    @media ${props => props.theme.breakpoints.md} {
        grid-template-columns: auto auto;
        height: 240px;
    }

`

export const ListItem = styled.div`
    width: ${props=> props.coming? "260px": "170px"};
    display:flex;
    flex-direction:column;
    align-items: center;

    @media ${props=> props.theme.breakpoints.md} {
        max-width: 200px;
    }

    @media ${props => props.theme.breakpoints.sm} {
        margin-bottom: 14px;
        max-width: 320px;
        width: 50%;
        
    }
`
