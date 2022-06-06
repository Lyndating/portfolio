import styled from "styled-components"

export const FooterContainer = styled.div`
	display:flex;
	flex-direction: row;
	align-items: center;
	jusity-content: space-between;
	margin-top: 5vh;
	margin-bottom: 1vh;
@media ${(props)=>props.theme.breakpoints.md}{
		display:flex;
		flex-direction: column;
}
@media ${(props)=>props.theme.breakpoints.md}{
		display:flex;
		flex-direction:column;
}
`
export const FooterLinkList = styled.div`
	width: 50%;

@media ${(props)=>props.theme.breakpoints.md}{
	width: 100%;
}
`

export const SocialIconsContainer = styled.ul`
	width: 100%;
	display:grid;
	list-style-type: none;
	grid-template-columns: repeat(4, max-content);
	grid-template-rows: auto;
	justify-content: center;
	justify-items: center;
	align-items: center;
	grid-gap: 2vw;
	margin-bottom: 1vh;

@media ${props => props.theme.breakpoints.md}{
	grid-template-columns: repeat(4,max-content);
	grid-template-rows: auto;
	width: 100%;
}

@media ${props => props.theme.breakpoints.sm}{
  display: flex;
	width: 100%;
  flex-direction: row;
}
`


export const FooterLi= styled.li`
	display: inline-block;
  	position: relative;
	color: ${props=> props.theme.colors.primary1};


	&:after {
  		content: '';
  		position: absolute;
  		width: 100%;
  		transform: scaleX(0);
  		height: 2px;
  		bottom: 0;
  		left: 0;
  		background-color: ${props=> props.theme.colors.primary1};
  		transform-origin: bottom right;
  		transition: transform 0.25s ease-out;
	}

	&:hover:after {
  		transform: scaleX(1);
  		transform-origin: bottom left;
	}

`
export const FooterLink= styled.a`
	text-decoration: none;
`

export const Small = styled.small`
	width: 45%;
	display:flex;
	flex-direction:row;
	justify-content: flex-end;
	
	@media ${props=>props.theme.breakpoints.md}{
		width: 100%;
		justify-content: center;
	}
`