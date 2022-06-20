import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize};

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    body[data-theme="dark"]{
        font-family: ${props=> props.theme.fonts.main};
        font-size: 1.6rem;
        background: ${props => props.theme.colors.background1};
        --color-text: ${props=> props.theme.colors.primary1};
        --color-paragragh: #302e2e;
        --color-title: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255,255,255, 0.66) 60.15%);   
        --color-button: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
        --color-skill-item: rgb(19, 173, 199);
        cursor: default;
    }
    body[data-theme="light"]{
        font-family: ${props=> props.theme.fonts.main};
        --color-text: ${props=> props.theme.colors.primary2};
        --color-paragrah: #e4e6e7;
        --color-title: linear-gradient(121.57deg, #000 18.77%, rgba(0,0,0, 0.66) 60.15%);
        --color-button: linear-gradient(270deg, #c79d13 0%, #d84792 100%);
        font-size: 1.6rem;
        --color-skill-item: #d84792;
        
        background: ${props => props.theme.colors.background2};
        color: ${props=> props.theme.colors.primary2};
        cursor: default;
    }
    h1,h2,h3,h4,h5,h6,button {
        font-family: ${props => props.theme.fonts.title};

    }
    h1,h2,h5,h6{
        background: var(--color-title);
    }
    p, button {
        color: var(--color-text);
    }
    button {
        background: var(--color-button);
    }
    a {
        text-decoration: none;
        color: var(--color-text);
    }
    li {
        list-style: none;
        color: var(--color-text);
        &:after {
            background-color: var(--color-text);
        }
    }
    small {
        color: var(--color-text);
    }
    #scroll_button {
        color: var(--color-text);
    }
    #skill_items {
        color: var(--color-text);
        transition: transform 500ms, color 1000ms linear;
        &:hover{
        color: var(--color-skill-item);
        transform: scale(1.1) ;
        transition: color 500ms ease-in-out;
        cursor:pointer;
        }
        &:hover::after{
            color: var(--color-text);
            transition: color 500ms ease-in-out;
        }
    }
    #section_divider {
        background: var(--color-button);
        
    }
    
`;

export default GlobalStyle;