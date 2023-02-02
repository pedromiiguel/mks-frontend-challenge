import { DefaultTheme } from 'styled-components';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  subsets: ['latin']
});

export const theme: DefaultTheme = {
  grid: {
    container: '100rem',
    gutter: '3.2rem'
  },
  border: {
    radius: {
      small: '0.5rem',
      medium: '0.8rem',
      circle: '50%'
    }
  },
  font: {
    family: `${montserrat.style.fontFamily}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      xmedium: '1.8rem',
      large: '2.0rem',
      xlarge: '3.2rem',
      xxlarge: '4.0rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primary: '#0F52BA',
    white: '#FFFFFF',
    gray: {
      100: '#eeeeee',
      200: '#bfbfbf',
      500: '#373737',
      600: '#2C2C2C'
    },
    black: ' #000000'
  },
  spacings: {
    xxxsmall: '0.8rem',
    xxsmall: '1.2rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    huge: '6.4rem',
    xhuge: '8rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '300ms ease-in-out',
    fast: '150ms ease-in-out'
  }
};
