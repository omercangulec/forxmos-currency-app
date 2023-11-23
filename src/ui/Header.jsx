import { styled } from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeader = styled.header`
  background-color: var(--color-black);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  /* position: fixed;
  top: 0;
  width: 100%; */

  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
`;

const Icon = styled.span`
  justify-self: end;
  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
    cursor: pointer;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-2);
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <MainNav />
      <Icon>
        <DarkModeToggle />
      </Icon>
    </StyledHeader>
  );
}

export default Header;
