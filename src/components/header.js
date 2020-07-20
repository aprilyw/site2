import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled";
import dimensions from "../styles/dimensions";

const Header = ({siteTitle}) => (
  <HeaderContainer>
      <HeaderContent>
          <HeaderHome>
            <Link to="/">
              {siteTitle}
            </Link>
          </HeaderHome>
          <HeaderLinks>
              <Link
                  activeClassName="Link--is-active"
                  to="/experience">
                  EXPERIENCE
              </Link>
              <Link
                  activeClassName="Link--is-active"
                  to="/projects">
                  PROJECTS
              </Link>
              <Link
                  activeClassName="Link--is-active"
                  to="/journal">
                  JOURNAL
              </Link>
          </HeaderLinks>
      </HeaderContent>
  </HeaderContainer>
)


const HeaderContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 3em;
    padding-left: 3em;
    padding-right: 3em;
`

const HeaderContent = styled("div")`
    display: flex;
    justify-content: space-between;
`
const HeaderHome = styled("div")`
    font-weight: 900;
    font-size: 2em;
    font-family: "geomanistbook";
    a {
        text-decoration: none;
        color: currentColor;
    }
`

const HeaderLinks = styled("div")`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 3em;
    justify-content: flex-end;
    width: 100%;
    max-width: 200px;
    font-family: "geomanistregular";

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        grid-gap: 5.5em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        grid-gap: 2.5em;
    }

    a {
        color: currentColor;
        text-decoration: none;
        border-bottom: 3px solid transparent;
        font-weight: 600;
        font-size: 0.95em;
        height: 100%;
        padding-bottom: .25em;
        padding-top: 0.25em;
        display: block;
        position: relative;

        &:after {
            position: absolute;
            content: "";
            bottom: 0;
            width: 18px;
            height: 3px;
            background: transparent;
            bottom: -3px;
            right: 50%;
            margin-right: -9px;
            transition: 200ms ease-in-out background;
        }

        &:hover {
            &:after {
                background: #e6e6fa;
                transition: 200ms ease-in-out background;
            }
        }

        &.Link--is-active {
            &:after {
                background: #e6e6fa;
            }
        }
    }
`


export default Header
