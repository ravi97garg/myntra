import React, {Component} from 'react';
import {LeftWrapper, RightWrapper, StyledHeader} from './style';
import NavbarComponent from "./NavbarComponent";
import SearchbarComponent from "./SearchComponent";
import Logo from "./Logo";
import TopCornerComponent from "./TopCornerComponent";

class Header extends Component {
    render() {
        return (
            <StyledHeader>
                <LeftWrapper>
                    <Logo/>
                    <NavbarComponent/>
                </LeftWrapper>
                <RightWrapper>
                    <SearchbarComponent/>
                    <TopCornerComponent/>
                </RightWrapper>
            </StyledHeader>
        )
    }
}

export default Header;