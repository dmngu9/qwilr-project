import styled from '../../utils/styled-component';

export const Container = styled.div`
    width: 100%;
`;

export const Header = styled.div`
    font-size: 18px;
    font-weight: 300;
    color: #3a3a3a;
    padding: 0 0 10px;
    border-bottom: 1px solid ${props => props.theme.primaryColor};
`;

export const TextFieldContainer = styled.div`
    margin-bottom: 16px;
`;
