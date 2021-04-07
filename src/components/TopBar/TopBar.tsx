import React, { FC } from 'react';
import styled from 'styled-components';

import {Wrapper} from "../StyledHelpers/Components";
import {Colors} from "../StyledHelpers/Colors";
import { ExpandedMenu } from './ExpandedMenu';

import logo from '../../media/icons/logo1.png';
import house from '../icons/house.png';
import search from '../icons/search.png';
import comments from '../icons/comments.png';
import bell from '../icons/bell.png';


const Wrapper2 = styled(Wrapper)`
  padding: 10px;
`;

const InnerWrapper = styled.div`
   idth: 1200px;
   background: ${Colors.white}
`;

const RightIcons = styled.div`
    
`;

const InputWrapper = styled.div`

`;



export const TopBar: FC = () => {
    return (
        <Wrapper>
            <InnerWrapper>
                <img src={logo} alt="logo" />
                <div>
                    <ExpandedMenu/>
                </div>
                <InputWrapper>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <img src={search}/>
                </InputWrapper>
                <RightIcons>
                    <img src={house}/>
                    <img src={comments}/>
                    <img src={bell}/>
                </RightIcons>
            </InnerWrapper>
        </Wrapper>
    );
};


