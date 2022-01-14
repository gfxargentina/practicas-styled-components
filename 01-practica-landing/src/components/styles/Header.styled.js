import styled from "styled-components";

export const StyledHeader = styled.header`
  //por props
  //background-color: ${({ bg }) => bg};
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
`;
