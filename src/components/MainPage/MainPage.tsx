import styled from 'styled-components';
const Wrapper - styled.selection`
    `;

const Content - styled.div`
    max-width: 1200px;
    align-items: center;
  display: flex;
  `;

const MainPage : FC = () => {
    return(
        <Wrapper>
            <TopBar />
            <Content>
                <LeftMenu />
                <div>content</div>
            </Content>
        </Wrapper>
    )
    };

export default MainPage;

