import styled from "styled-components";
import { NavLink } from "react-router-dom";

import {
  HiEnvelope,
  HiMiniBanknotes,
  HiUserGroup,
  HiMiniHomeModern,
} from "react-icons/hi2";
import { MdCardGiftcard } from "react-icons/md";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1rem 0rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MiniMainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to={"/guests"}>
            <HiUserGroup />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={"/invitation-card"}>
            <MdCardGiftcard />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={"/invitation-money"}>
            <HiEnvelope />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={"/payment"}>
            <HiMiniBanknotes />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={"/services"}>
            <HiMiniHomeModern />
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MiniMainNav;
