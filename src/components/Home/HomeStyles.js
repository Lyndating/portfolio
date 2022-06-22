import React from 'react';
import styled from 'styled-components';

export const MainSection = styled.div`
    width: 100%;
    padding-left: 0;

    @media ${(props) => props.theme.breakpoints.sm} {
        padding-left: 20px;
    }
`