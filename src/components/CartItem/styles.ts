import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: ${theme.border.radius.medium};

    padding: ${theme.spacings.small};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacings.xsmall};

    position: relative;

    ${media.lessThan('small')`
      flex-direction: column;
      align-items: stretch;
    `}
  `}
`;

export const ImageWrapper = styled.div`
  position: relative;

  align-self: center;

  width: 6rem;
  height: 6rem;
  ${media.lessThan('small')`
      width: 9rem;
      height: 9rem; 
    `}
`;

export const Title = styled.h4`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.medium};
    line-height: 1.9rem;
    color: ${theme.colors.gray[600]};
    text-align: center;
  `}
`;

export const Price = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    line-height: 1.7rem;
    color: ${theme.colors.black};

    ${media.lessThan('small')`
      background-color: ${theme.colors.gray[500]};
      border-radius: ${theme.border.radius.small};
      padding: ${theme.spacings.xxxsmall} ${theme.spacings.xxsmall};
      color: ${theme.colors.white};
      line-height: 1.5rem;
  `}
  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};

    ${media.lessThan('small')`
      justify-content: space-between;
    `}
  `}
`;

export const RemoveProductButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    border: 0;
    background-color: ${theme.colors.black};
    width: 1.8rem;
    height: 1.8rem;
    border-radius: ${theme.border.radius.circle};

    position: absolute;
    top: -0.6rem;
    right: -0.6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      width: 0.8rem;
      height: 0.8rem;
      fill: ${theme.colors.white};
    }

    ${media.lessThan('small')`
      top: 0.8rem;
      right: 0.8rem;
      background-color: transparent;
      > svg {
        width: 1.8rem;
        height: 1.8rem;
        fill: ${theme.colors.black};
      }
    `}
  `}
`;
