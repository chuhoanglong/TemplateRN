import { Icon } from '@components/common-icon';
import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import { View } from '@components/view';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import React, { memo, useCallback } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useTopbarStyle } from './styles';

interface Props {
  children: React.ReactNode;
  title?: string;
  renderHeader?: () => React.ReactChild;
  header?: React.ReactNode;
}
const _Topbar = ({ children, title, renderHeader, header }: Props) => {
  const styles = useTopbarStyle(!!header);
  const navigation = useNavigation();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <LinearGradient useAngle angle={108.66} colors={COLORS.DRAWER_GRADIENT} style={styles.container}>
      {header}
      <View style={styles.body}>
        <View
          mb={Platform.SizeScale(10)}
          mh={Platform.SizeScale(10)}
          mt={Platform.SizeScale(20)}
          style={[commonStyles.row, commonStyles.center]}
        >
          {!title ? (
            renderHeader?.()
          ) : (
            <>
              <Touchable onPress={onBack} style={styles.iconBack}>
                <Icon tintColor={COLORS._085A51} icon={Icons.ICON_BACK} size={2} />
              </Touchable>
              <Text fontType="fontBold" color={COLORS._085A51} fontSize={Platform.SizeScale(18)}>
                {title}
              </Text>
            </>
          )}
        </View>
        {children}
      </View>
      {/* <View style={{ position: 'absolute', top: 0, height: 50, width: 50, backgroundColor: 'red' }} /> */}
    </LinearGradient>
  );
};

export const Topbar = memo(_Topbar);
