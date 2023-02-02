import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small} ${theme.spacings.medium};

    ${media.lessThan('small')`
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    `}
  `}
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xxsmall};
    align-items: center;
  `}
`;

export const HighlightText = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.font.semibold};
    font-size: ${theme.font.sizes.xxlarge};
    line-height: 1.9rem;

    ${media.lessThan('small')`
    font-size: ${theme.font.sizes.xlarge};

    `}
  `}
`;

export const Text = styled.h4`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.large};
    line-height: 1.9rem;

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;

export const CartButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    border-radius: ${theme.border.radius.medium};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xmedium};
    line-height: 2.2rem;
    padding: ${theme.spacings.xxsmall};

    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};
    border: none;

    cursor: pointer;

    transition: filter ${theme.transition.fast};

    :hover {
      filter: brightness(0.9);
    }
  `}
`;
