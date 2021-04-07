import {FC} from 'React';
import styled from 'styled-components';

import {Wrapper} from "../StyledHelpers/Components";
import {Colors} from "../StyledHelpers/Colors";
import { ExpandedMenu } from './ExpandedMenu';


const Wrapper2 = styled(Wrapper)`
  padding: 10px;
`;

const InnerWrapper = styled.div`
   idth: 1200px;
   background: ${Colors.white}`;

const RightIcons = styled.div`
    
`;

const InputWrapper = styled.div`

`;

const CustomImg = styled.img`

`;

const CustomInput = styled.input`

`;

export const TopBar: FC = () => {
    return (
        <Wrapper2>
            <InnerWrapper>
                <CustomImg src={"./logo.png"}/>
                <div>
                    <ExpandedMenu/>
                </div>
                <InputWrapper>
                    <CustomInput type={"text"}/>
                    <input type={"text"}/>
                    <CustomImg src={"./icons/search.png"}/>
                </InputWrapper>
                <RightIcons>
                    <CustomImg src={"./icons/house.png"}/>
                    <CustomImg src={"./icons/comments.png"}/>
                    <CustomImg src={"./icons/bell.png"}/>
                </RightIcons>
            </InnerWrapper>
        </Wrapper2>
    );
};


