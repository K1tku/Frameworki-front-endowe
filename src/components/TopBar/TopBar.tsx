import React, { FC } from 'react';
import styled from 'styled-components';




import {Wrapper} from "../StyledHelpers/Components";
import {Colors} from "../StyledHelpers/Colors";
import { ExpandedMenu } from './ExpandedMenu';
import { fontSize } from '../StyledHelpers/FontSizes'

import logo from '../../media/icons/logo1.png';
import house from '../icons/house.png';
import search from '../icons/search.png';
import comments from '../icons/comments.png';
import bell from '../icons/bell.png';
import useDropdown from "react-dropdown-hook";


const InnerWrapper = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${fontSize["18"]}
  
  
`;

const RightIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(5,auto);
  grid-gap: 10px;
`;

const InputWrapper = styled.div`
  align-content: center;
  display:flex;
`;

const LeftLogo = styled.div`
  justify-self: start;
  margin-left: 10px;
  cursor: pointer;
    
`;

const SearchField = styled.div`
  height:20px;
  font-size: 17px;
  border-left: none;
  
`;

const SearchButton = styled.div`
  height: 30px;
  color: white;
  font-size: 30px;
  cursor: pointer;
  margin-left: 19%;
  position: absolute;
  
  `;
const MenuWrapper = styled.div`
display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  width: 200px;
  justify-content: space-between;
`;




export const TopBar: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropDown] = useDropdown();

    const menuHandler = () => {
        toggleDropDown();
    }
    return (
        <Wrapper>
            <InnerWrapper>

                <LeftLogo>
                    <img src={logo} alt="logo" height="40px"/>
                </LeftLogo>
                <MenuWrapper ref={wrapperRef}>
                    <button onClick={menuHandler}>Otwórz menu</button>

                    {dropdownOpen &&
                    <ExpandedMenu/>
                    }
                </MenuWrapper>
                <div>
                    <ExpandedMenu/>
                </div>
                <InputWrapper>
                    <SearchField>
                        <input type="text" placeholder="Search" style={{ height: "25px", width:"300px"  }} border-left="none" />
                    </SearchField>
                    <SearchButton>
                        <img src={search} alt="search" />
                    </SearchButton>
                </InputWrapper>
                <RightIcons>
                    <img src={house} alt="house"/>
                    <img src={comments} alt="comments"/>
                    <img src={bell} alt="bell"/>
                </RightIcons>
            </InnerWrapper>
        </Wrapper>
    );
};
export default TopBar

