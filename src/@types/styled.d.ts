import 'styled-components';

export interface Border {
  radius: {
    small: string;
    medium: string;
    circle: string;
  };
}

export interface Colors {
  primary: string;
  white: string;
  gray: { [key: string]: string };
  black: string;
}

export interface Font {
  family: string;
  light: number;
  normal: number;
  semibold: number;
  bold: number;
  sizes: Spacings;
}

export interface Spacings {
  xxxsmall?: string;
  xxsmall?: string;
  xsmall: string;
  small: string;
  medium: string;
  xmedium?: string;
  large: string;
  xlarge: string;
  xxlarge: string;
  huge?: string;
  xhuge?: string;
}

export interface Grid {
  container: string;
  gutter: string;
}

export interface Layers {
  base: number;
  menu: number;
  overlay: number;
  modal: number;
  alwaysOnTop: number;
}

export interface Transition {
  default: string;
  fast: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    grid: Grid;
    border: Border;
    font: Font;
    colors: Colors;
    spacings: Spacings;
    layers: Layers;
    transition: Transition;
  }
}
