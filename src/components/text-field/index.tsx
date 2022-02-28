import React, { forwardRef, Ref, useMemo, useState } from 'react';
import { Image, TextInput, View } from 'react-native';
import { useLayout } from '@react-native-community/hooks';
import { Text } from '../text';
import { Touchable } from '../touchable';
import { useStylesTextField } from './styles';
import { TextFiledProps } from './types';
import { Platform } from '@theme/platform';
import { Icon } from '@components/common-icon';
import { Icons } from '@theme/icons';
import { COLORS } from '@theme/colors';

export const TextField = forwardRef(
  (
    {
      style,
      renderLeftAccessory,
      renderRightAccessory,
      inputStyle,
      label,
      labelStyle,
      labelContentStyle,
      prefix,
      suffix,
      prefixStyle,
      secureTextEntry,
      ...other
    }: TextFiledProps,
    ref: Ref<TextInput>,
  ) => {
    const styles = useStylesTextField();
    const [showSecureTextEntry, setSecureTextEntry] = useState(false);
    const { onLayout, height } = useLayout();
    function showPassword() {
      setSecureTextEntry(prev => !prev);
    }
    const iosEye = useMemo(() => {
      return !showSecureTextEntry ? (
        <Image source={require('../../assets/images/login/icon_eye_login.png')} />
      ) : (
        <Image source={require('../../assets/images/login/icon_eye_login.png')} />
      );
    }, [showSecureTextEntry]);

    const androidEye = useMemo(() => {
      return !showSecureTextEntry ? 'eye' : 'eye-with-line';
    }, [showSecureTextEntry]);

    const contentRight = useMemo(() => {
      if (!secureTextEntry) {
        return renderRightAccessory?.();
      }
      if (!renderRightAccessory) {
        return <Touchable onPress={showPassword}>{iosEye}</Touchable>;
      }
      return renderRightAccessory?.();
    }, [iosEye, renderRightAccessory, secureTextEntry]);

    return (
      <View style={[styles.content, style]}>
        {!!label && (
          <View {...{ onLayout }} style={[styles.vLabel, { top: -height / 2 }, labelContentStyle]}>
            <Text style={[styles.label, labelStyle]}>{label}</Text>
          </View>
        )}
        {renderLeftAccessory?.()}
        {!!prefix && <Text style={[styles.prefix, prefixStyle]}>{prefix}</Text>}
        <TextInput
          allowFontScaling={false}
          style={[styles.input, inputStyle]}
          underlineColorAndroid="transparent"
          secureTextEntry={!showSecureTextEntry && secureTextEntry}
          {...{ ref, ...other }}
        />
        {!!suffix && <Text style={[styles.prefix]}>{suffix}</Text>}
        {contentRight}
      </View>
    );
  },
);
