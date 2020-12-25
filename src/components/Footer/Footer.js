import React from "react";
import { Button } from "../../globalStyles";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterDescription,
  FooterLinkTitleLocality
} from "./Footer.elements";

import { NavLogoLakaters } from "../Navbar/Navbar.elements";

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkTitleLocality>OUR LOCALITIES</FooterLinkTitleLocality>
          <FooterLinkItems>
            <FooterLinkTitle>Hyderabad</FooterLinkTitle>
            <FooterDescription>
              104, Crescent Heights, Kismathpur, Hyderabad, Telengana, 500030.
            </FooterDescription>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Kochi</FooterLinkTitle>
            <FooterDescription>
              Maradu Poonithura, Maradu, Kochi, Kerala 682304.
            </FooterDescription>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <FooterLinksWrapper>
        <FooterLinkTitleLocality>CONTACT US</FooterLinkTitleLocality>
        <FooterLinkItems>
          <a href="tel:+91 7207724191">7207724191</a>
        </FooterLinkItems>
        <FooterLinkItems>
          <a href="mailto:lakaters.hyd@gmail.com">lakaters.hyd@gmail.com</a>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <NavLogoLakaters />
          </SocialLogo>
          <WebsiteRights>Lakaters © 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={"/"}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
