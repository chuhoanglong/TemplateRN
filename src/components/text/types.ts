import { ReactNode } from 'react';
import { ParsedTextProps as ParsedTextPropsBase } from 'react-native-parsed-text';

export type ParsedTextProps = ParsedTextPropsBase & {
  children: string | React.ReactNode;
  isViewHtml?: boolean;
  isLongText?: boolean;
  showMore?: boolean;
  numberOfLines?: number;
  fontType?: 'fontRegular' | 'fontBold' | 'fontItalic' | 'fontLight';
  color?: string;
  fontSize?: number;
  activeColor?: string;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  isPress?: boolean;
  onPress?: () => void;
  ml?: number;
  mr?: number;
  mb?: number;
  mt?: number;
  mh?: number;
  mv?: number;
  textAlign?: 'left' | 'center' | 'right';
  maxWidth?: number;
};
