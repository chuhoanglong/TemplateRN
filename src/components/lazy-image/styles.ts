import { useTheme } from '@react-navigation/native';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export const useStyleLazyImage = () => {
  const { colors } = useTheme();

  return useMemo(() => {
    const styles = StyleSheet.create({
      indicator: {
        position: 'absolute',
        zIndex: 1,
      },
    });

    return {
      progressColor: colors.card,
      styles,
    };
  }, [colors]);
};
