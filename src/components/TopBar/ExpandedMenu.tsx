import { FC } from 'React';
import styled from 'styled-components';

const Wrapper = styled.div`
position: absolute;
top: 24px;
  left: 0;
  background: white;
  padding: 16px;
  border: 1px solid;
`;

export const ExpandedMenu: FC = () => {
    return(
        <Wrapper>
            <ul>
                <li>11111111111</li>
                <li>22222222222</li>
                <li>33333333333</li>
            </ul>
        </Wrapper>
    );

};