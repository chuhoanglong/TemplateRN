import React, { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSearchCurrencyStyle } from './styles';
import GenericModal from '@components/GenericModal';
import { COLORS } from '@theme/colors';
import { TextField } from '@components/text-field';
import { Platform } from '@theme/platform';
import { Icon } from '@components/common-icon';
import { Icons } from '@theme/icons';
import { View } from '@components/view';
import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import commonStyles from '@theme/commonStyles';
import { ListFullOption } from '@components/list';
import { currencies } from './__mocks__/data';

const _SearchCurrencyScreen = ({}) => {
  const navigation = useNavigation();
  const styles = useSearchCurrencyStyle();

  const renderLeftAccessory = useCallback(() => {
    return (
      <View>
        <Icon icon={Icons.ICON_SEARCH} tintColor={COLORS._0F7D70} size={1.5} />
      </View>
    );
  }, []);

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderItemMenu = useCallback(
    (item, index, isFavorite, onPress) => {
      return (
        <View mv={Platform.SizeScale(8)} mh={Platform.SizeScale(8)} style={styles.item}>
          <Text fontSize={Platform.SizeScale(10)}>{item.name}</Text>
        </View>
      );
    },
    [styles.item],
  );

  return (
    <GenericModal scrollEnabled={false} pageTitle={'choice a currency'}>
      <View mh={Platform.SizeScale(20)} style={[commonStyles.row]}>
        <TextField
          // onChangeText={setUserName}
          style={styles.inputContainer}
          placeholder={'Enter wallet name'}
          // inputStyle={styles.inputStyles}
          placeholderTextColor={COLORS._0F7D70}
          renderLeftAccessory={renderLeftAccessory}
        />
        <Touchable onPress={onBack}>
          <Text fontSize={Platform.SizeScale(13)} color={COLORS._085A51} ml={Platform.SizeScale(10)}>
            Cancel
          </Text>
        </Touchable>
      </View>

      <View style={{ width: Platform.deviceWidth }}>
        <View
          mh={Platform.SizeScale(20)}
          mv={Platform.SizeScale(20)}
          style={[commonStyles.row, commonStyles.spaceBetween]}
        >
          <Text color={COLORS._909090} fontSize={Platform.SizeScale(10)}>
            Search History
          </Text>
          <View style={styles.clearHistory}>
            <Text fontSize={Platform.SizeScale(10)} color={COLORS._26BBA9}>
              Clear History
            </Text>
          </View>
        </View>

        <ListFullOption
          style={styles.list}
          data={currencies}
          renderSubItem={renderItemMenu}
          horizontal={true}
          scrollEnabled={false}
        />
      </View>
    </GenericModal>
  );
};

export const SearchCurrencyScreen = memo(_SearchCurrencyScreen);
