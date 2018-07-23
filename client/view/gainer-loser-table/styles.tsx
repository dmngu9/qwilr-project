import styled from '../../utils/styled-component';

export const TableContainer = styled.div`
    width: 100%;
    margin-top: 16px;
`;

export const Header = styled.div`
    font-size: 18px;
    font-weight: 300;
    color: #3a3a3a;
    padding: 0 0 10px;
    border-bottom: 1px solid ${props => props.theme.primaryColor};
`;
