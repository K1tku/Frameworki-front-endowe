import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Wrapper } from '../StyledHelpers/Components';
import { Colors } from '../StyledHelpers/Colors';


const Content = styled.div`
  max-width: 1200px;
  align-items: center;
  display: flex;
`;

const MainPage: FC = () => {
    return (
        <Wrapper>
            <TopBar/>
            <Content>
                <LeftMenu/>
                <div>content</div>
            </Content>
        </Wrapper>
    );
};

export default MainPage;
