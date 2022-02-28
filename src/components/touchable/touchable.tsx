import React, { forwardRef, Ref, useImperativeHandle } from 'react';
import { Platform, TouchableNativeFeedback, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { TouchableProps } from './types';

export const Touchable = forwardRef(
  ({ children, style, handleSubmit, onPress, ...props }: TouchableProps, ref?: Ref<TouchableOpacityProps>) => {
    useImperativeHandle(ref, () => ({
      onPress,
    }));

    if (Platform.OS === 'android') {
      const canUseForground = TouchableNativeFeedback.canUseNativeForeground();

      return (
        <TouchableNativeFeedback
          hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
          useForeground={canUseForground ? true : false}
          background={TouchableNativeFeedback.SelectableBackground()}
          onPress={handleSubmit ?? onPress}
          {...props}
        >
          <View ref={ref} style={style}>
            {children}
          </View>
        </TouchableNativeFeedback>
      );
    }

    return (
      <TouchableOpacity
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        ref={ref}
        style={style}
        onPress={handleSubmit ?? onPress}
        {...props}
      >
        {children}
      </TouchableOpacity>
    );
  },
);
