import { fonts } from '@theme/fonts';
import { Platform } from '@theme/platform';
import React, { useCallback, useState } from 'react';
import { Linking, StyleSheet, Text as RCText } from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';
import ParsedText from 'react-native-parsed-text';
import { ParsedTextProps } from './types';

const Text = ({
  style,
  isViewHtml,
  children,
  isLongText,
  numberOfLines,
  fontType = 'fontRegular',
  color,
  activeColor = color,
  textTransform = 'none',
  isPress = false,
  onPress,
  fontSize,
  ml,
  mr,
  mb,
  mt,
  mh,
  mv,
  textAlign,
  maxWidth,
  ...other
}: ParsedTextProps) => {
  const onShouldStartLoadWithRequest = useCallback(req => {
    // open the link in native browser
    if (req.url.includes('http') || req.url.includes('tel')) {
      Linking.openURL(req.url);
      return false;
    }
    // returning false prevents WebView to navigate to new URL
    return true;
  }, []);

  if (style instanceof Array) {
    style.unshift(Platform.textBase);
  } else {
    style = StyleSheet.flatten([
      Platform.textBase,
      { color: isPress ? activeColor : color, textTransform },
      { marginLeft: ml, marginRight: mr, marginTop: mt, marginBottom: mb, marginHorizontal: mh, marginVertical: mv },
      { fontSize },
      { textAlign },
      { maxWidth },
      style,
      { fontFamily: isPress ? fonts.fontBold : fonts[fontType] },
    ]);
  }

  if (isViewHtml) {
    return (
      <>
        <AutoHeightWebView
          scrollEnabled={false}
          scrollEnabledWithZoomedin={true}
          style={{
            width: Platform.deviceWidth,
          }}
          customStyle={`
                
              `}
          source={
            typeof children === 'string'
              ? {
                  uri: children.toString(),
                }
              : {
                  html: `<div>${children}</div>`,
                }
          }
          {...{ onShouldStartLoadWithRequest }}
        />
      </>
    );
  }

  if (isLongText) {
    return (
      <ParsedText allowFontScaling={false} numberOfLines={numberOfLines} style={style} {...other}>
        {children}
      </ParsedText>
    );
  }

  return (
    <ParsedText
      {...{ onPress }}
      allowFontScaling={false}
      selectable={true}
      numberOfLines={numberOfLines}
      {...other}
      style={style}
    >
      {children}
    </ParsedText>
  );
};

export { Text };
