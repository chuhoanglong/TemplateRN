import React, { memo, useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { usePassphraseVerificationStyle } from './styles';
import { Topbar } from '@components/topbar';
import Question from '@scenes/passphase/Question';
import { TextField } from '@components/text-field';
import { View } from '@components/view';
import { Platform } from '@theme/platform';
import { COLORS } from '@theme/colors';
import { CommonButton } from '@components/CommonButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenRouteT } from '@routes/types';
import { useBlurView } from '@hook/use-blur-view';
import { CommonCard } from '@components/common-card';
import { LazyImage } from '@components/lazy-image';
import { Images } from '@theme/images';
import { Text } from '@components/text';
import { useDispatch, useSelector } from 'react-redux';
import { addWalletRequest } from '@redux/wallet/actions';
import { RootState } from '@redux/reducers';

const _PassphraseVerificationScreen = ({}) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { walletName } = useSelector((state: RootState) => state.wallet);

  const navigation = useNavigation<StackNavigationProp<ScreenRouteT, 'PassphraseVerification'>>();
  const styles = usePassphraseVerificationStyle();
  const blurView = useBlurView();
  const [passphrase, setPassphrase] = useState('');
  const dispatch = useDispatch();

  const onShowComplete = useCallback(() => {
    blurView.onShow(
      <CommonCard title="COMPLETED" width={Platform.SizeScale(310)}>
        <View mt={Platform.SizeScale(20)} alignItems="center">
          <LazyImage resizeMode="contain" source={Images.IMAGE_LIKE} style={styles.like} />
        </View>
        <Text
          mv={Platform.SizeScale(20)}
          mh={Platform.SizeScale(20)}
          textAlign="center"
          fontSize={Platform.SizeScale(18)}
        >
          Welcome to SDG Wallet, Your wallet has been created!
        </Text>
        <View mv={Platform.SizeScale(20)} alignItems="center">
          <CommonButton
            onPress={() => {
              blurView.onHide();
            }}
            width={Platform.SizeScale(290)}
            type="full"
            text="Done"
          />
        </View>
      </CommonCard>,
      {
        right: Platform.SizeScale(30),
        top: Platform.SizeScale(100),
      },

      'zoom',
    );
  }, [blurView, styles.like]);

  const onComplete = useCallback(() => {
    dispatch(
      addWalletRequest({
        mnemonic: passphrase,
        name: walletName,
        userId: user?.data.id ?? '',
        callback: () => {
          navigation.reset({
            routes: [{ name: 'Drawer' }],
            routeNames: ['Drawer'],
          });
          onShowComplete();
        },
      }),
    );
  }, [dispatch, navigation, onShowComplete, passphrase, user?.data.id, walletName]);

  return (
    <View>
      <Topbar title="Passphrase Verification">
        <View mv={Platform.SizeScale(10)} mh={Platform.SizeScale(20)}>
          <Question />
          <TextField
            multiline={true}
            numberOfLines={5}
            style={styles.passphraseInput}
            placeholder={'Enter your passphrase'}
            inputStyle={styles.inputStyles}
            placeholderTextColor={COLORS._989898}
            onChangeText={setPassphrase}
          />
        </View>
        <View mt={Platform.SizeScale(10)}>
          <CommonButton
            style={[styles.button, { backgroundColor: passphrase ? COLORS._139B8B : styles.button.backgroundColor }]}
            type="normal"
            text={'Next'}
            width={Platform.SizeScale(343)}
            height={Platform.SizeScale(47)}
            textColor={COLORS.WHITE}
            onPress={onComplete}
            disabled={!passphrase}
          />
        </View>
      </Topbar>
    </View>
  );
};

export const PassphraseVerificationScreen = memo(_PassphraseVerificationScreen);
