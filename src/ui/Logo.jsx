import { styled } from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-self: start;
`;

const Img = styled.img`
  height: 6.4rem;
  width: auto;
`;

const P = styled.p`
  text-transform: uppercase;
  font-weight: 600;
`;

const StyledX = styled.span`
  color: var(--color-brand-1);
`;

const StyledS = styled.span`
  color: var(--color-brand-2);
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="../../public/browser-logo.png" alt="logo" />
      <P>
        For<StyledX>x</StyledX>mo<StyledS>s</StyledS>
      </P>
    </StyledLogo>
  );
}

export default Logo;
