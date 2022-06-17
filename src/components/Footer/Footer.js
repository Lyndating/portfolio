import React from 'react';
import { FooterLi,FooterLinkList,FooterLink, FooterContainer,SocialIconsContainer, Small} from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterLinkList>
    <SocialIconsContainer>
        <FooterLi>
            <FooterLink href='https://github.com/Lyndating' target="_blank">GitHub</FooterLink>
        </FooterLi>
        <FooterLi>
            <FooterLink href='https://www.linkedin.com/in/lynn-ting-luo/' >LinkedIn</FooterLink>
        </FooterLi>
        <FooterLi>
            <FooterLink href='mailto:lynn.ting.luo@gmail.com'>Email</FooterLink>
        </FooterLi>
        <FooterLi>
            <FooterLink href='/resume-TingLuo.pdf'download>Résumé</FooterLink>
        </FooterLi>
    </SocialIconsContainer>
    </FooterLinkList>
        <Small>
            &copy; 2022-{new Date().getFullYear()} All Rights Reserved, Made with{' '} 💗 by &lt;Ting&gt;
        </Small>
    </FooterContainer>
  );
};

export default Footer;