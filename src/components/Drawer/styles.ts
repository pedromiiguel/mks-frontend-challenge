import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { DrawerProps } from '.';

const overlayModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
};
type OverlayProps = Pick<DrawerProps, 'isOpen'>;

export const Overlay = styled.div<OverlayProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    inset: 0;
    z-index: ${theme.layers.overlay};
    transition: opacity 0.5s ease-in-out;

    ${isOpen && overlayModifiers.open()}
    ${!isOpen && overlayModifiers.close()}
  `}
`;

const containerAnimation = {
  open: () => css`
    animation-name: open;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;

    @keyframes open {
      from {
        opacity: 0;
        transform: translateX(700px);
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `,
  close: () => css`
    animation-name: close;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;

    @keyframes close {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(48rem);
        opacity: 0;
      }
    }
  `
};

type ContainerProps = Pick<DrawerProps, 'isOpen'>;

export const Container = styled.div<ContainerProps>`
  ${({ theme, isOpen }) => css`
    z-index: ${theme.layers.modal};
    position: fixed;
    background-color: ${theme.colors.primary};
    top: 0;
    right: 0;
    bottom: 0;
    max-width: 48rem;

    display: flex;
    flex-direction: column;
    transition: all 0.5s ease-in-out;

    max-width: ${isOpen ? '48rem' : 0};
    width: 90%;
    max-height: 100vh;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

    ${isOpen ? containerAnimation.open() : containerAnimation.close()}
  `}
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};\
    width: 3.8rem;
    height: 3.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: ${theme.border.radius.circle};
    border: 0;
    cursor: pointer;

    > svg {
      width: 1.5rem;
      height: 2.0rem;
      fill: ${theme.colors.white};
    }
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${theme.spacings.medium};

    ${media.lessThan('small')`
      padding: ${theme.spacings.small};
    `}
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
    line-height: 3.3rem;

    width: 100%;
    max-width: 19.6rem;
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    flex: 1;

    gap: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;

    padding: ${theme.spacings.medium};

    ${media.lessThan('small')`
      padding: 0 ${theme.spacings.small};
    `}
  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    padding: ${theme.spacings.medium};

    ${media.lessThan('small')`
      padding: ${theme.spacings.small};
    `}
  `}
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.h4`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
    line-height: 1.5rem;

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;

export const Price = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
    line-height: 1.5rem;

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;

export const CheckoutButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.small};
    margin-top: ${theme.spacings.medium};

    ${media.lessThan('small')`
    margin-top: ${theme.spacings.small};
    `}
  `}
`;
