import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius.medium};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  `}
`;

export const ImageWrapper = styled.div`
  align-self: center;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxxsmall};

    padding: ${theme.spacings.xsmall};
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacings.xxxsmall};
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.gray[600]};
    line-height: 1.9rem;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray[600]};
    line-height: 1.4rem;
  `}
`;

export const Price = styled.span`
  ${({ theme }) => css`
    display: block;
    background-color: ${theme.colors.gray[500]};
    border-radius: ${theme.border.radius.small};
    padding: ${theme.spacings.xxxsmall};

    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const BuyButton = styled.button`
  ${({ theme }) => css`
    border: 0;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    background-color: ${theme.colors.primary};
    width: 100%;

    font-weight: ${theme.font.semibold};
    font-size: ${theme.font.sizes.small};
    line-height: 1.9rem;
    padding: ${theme.spacings.xxxsmall};
    gap: ${theme.spacings.xsmall};

    transition: filter ${theme.transition.fast};

    :hover {
      filter: brightness(0.9);
    }
  `}
`;
