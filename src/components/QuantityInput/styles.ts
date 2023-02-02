import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: calc(${theme.spacings.xxxsmall} / 2);
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.black};

    ${media.lessThan('small')`
      display: none;
    `}
  `}
`;

export const QuantityInput = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: calc(${theme.spacings.xxxsmall} / 2);
    border: 0.03rem solid ${theme.colors.gray[200]};
    border-radius: ${theme.border.radius.small};
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    border: 0;
    cursor: pointer;
    background-color: transparent;
    padding: calc(${theme.spacings.xxxsmall} / 2);
    line-height: 1;

    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.black};

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.large};
      padding: calc(${theme.spacings.xxsmall} / 2);

    `}
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    border: 0;
    width: 2.6rem;

    padding-inline: calc(${theme.spacings.xxxsmall} / 2);
    border-left: 0.02rem solid ${theme.colors.gray[200]};
    border-right: 0.02rem solid ${theme.colors.gray[200]};
    color: ${theme.colors.black};

    ${media.lessThan('small')`
      width: 3.0rem;
      padding-inline: ${theme.spacings.xxxsmall};
    `}
  `}
`;
