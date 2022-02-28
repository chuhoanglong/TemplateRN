import FadeAnim from '@components/anim/FadeAnim';
import { Icon } from '@components/common-icon';
import { TriangleDown } from '@components/shape';
import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import { View } from '@components/view';
import { COLORS } from '@theme/colors';
import commonStyles from '@theme/commonStyles';
import { Icons } from '@theme/icons';
import { Platform } from '@theme/platform';
import React, { useCallback, useState } from 'react';
import { usePassphaseStyle } from './styles';

const Question = ({}) => {
  const styles = usePassphaseStyle();
  const [isShowHint, setIsShowHint] = useState(false);

  const onShowHint = useCallback(() => {
    setIsShowHint(!isShowHint);
  }, [isShowHint]);

  return (
    <>
      {isShowHint ? (
        <FadeAnim hidden={false}>
          <View mb={Platform.SizeScale(10)} style={styles.question}>
            <Text fontSize={Platform.SizeScale(11)} color={COLORS.WHITE}>
              Have 12 words (or 24) separated by a space
            </Text>
          </View>
          <View>
            <TriangleDown style={styles.triangle} />
          </View>
        </FadeAnim>
      ) : (
        <>
          <View mb={Platform.SizeScale(10)} style={styles.question1}>
            <Text fontSize={Platform.SizeScale(11)} color={COLORS.WHITE}>
              {' '}
            </Text>
          </View>
        </>
      )}

      <View mb={Platform.SizeScale(10)} style={[commonStyles.row]}>
        <Text fontType="fontBold" fontSize={Platform.SizeScale(16)} color={COLORS._085A51}>
          Passphrase
        </Text>
        <Touchable onPress={onShowHint}>
          <View ml={Platform.SizeScale(10)}>
            <Icon icon={Icons.ICON_QUESTION} size={2} />
          </View>
        </Touchable>
      </View>
    </>
  );
};

export default Question;
