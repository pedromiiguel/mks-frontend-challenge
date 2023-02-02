import styled, { css } from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-inline: ${theme.spacings.small};
  `}
`;

export const Content = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    margin-top: ${theme.spacings.xhuge};
    gap: ${theme.spacings.small};
  `}
`;

export const Message = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.semibold};
  `}
`;
