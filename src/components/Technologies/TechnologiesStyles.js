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

export const ListContainer = styled.div`
    display:flex;
    flex-direcion: column;

    @media ${props => props.theme.breakpoints.sm} {
        display: flex;
        margin-left: 20px;
    }
`

export const ListTitle = styled.h4`
    font-size: 25px;
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

export const ListParagraph = styled.p`
    font-size: 18px;
    line-height: 30px;
    color: rgba(255,255,255, 0.75);

    @media ${props=> props.theme.breakpoints.md} {
        font-size: 15px;
        line-height: 22px;
    }

    @media ${props=> props.theme.breakpoints.sm} {
        font-size: 14px;
        line-height: 20px;
    }
`

export const ListItems = styled.li`
    max-width: 90vw;
    display:flex;
    flex-direction: row;
    height: 120px;
    justify-content: space-evenly;
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
        flex-direction: row;
    }
`

export const ListIcon = styled.div`
    display:flex;
    width: 100%;
    height: auto;
    max-height: 80px;
    margin-bottom: 10px;
`