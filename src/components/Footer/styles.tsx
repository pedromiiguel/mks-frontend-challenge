import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.gray[100]};
    padding-block: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.xhuge};
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xsmall};
    line-height: 1.5rem;

    color: ${theme.colors.black};
    text-align: center;
  `}
`;
