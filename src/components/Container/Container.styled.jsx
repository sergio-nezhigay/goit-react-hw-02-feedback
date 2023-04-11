import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};

  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 40px;
  color: #010101;
`;
