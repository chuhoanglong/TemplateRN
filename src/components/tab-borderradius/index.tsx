import { Text } from '@components/text';
import { Touchable } from '@components/touchable';
import { View } from '@components/view';
import commonStyles from '@theme/commonStyles';
import React, { memo, useState } from 'react';
import { useTabBorderradiusStyle } from './styles';
import { pickBy, identity } from 'lodash';

type Props = {
  activeTabColor?: string;
  activeTabTextColor?: string;
  unActiveTabTextColor?: string;
  unActiveTabColor?: string;
  backgroundColor?: string;
  tabs?: { name: string }[];
};
const _TabBorderradius = ({
  activeTabColor,
  activeTabTextColor,
  unActiveTabTextColor,
  unActiveTabColor,
  backgroundColor,
  tabs = [
    {
      name: 'ETH',
    },
    {
      name: 'BTC',
    },
  ],
}: Props) => {
  const styles = useTabBorderradiusStyle();
  const [activeTab, setActiveTab] = useState(0);
  return (
    <View style={[styles.container, commonStyles.row, pickBy({ backgroundColor })]}>
      {tabs.map((value, index) => {
        return (
          <Touchable
            onPress={() => setActiveTab(index)}
            style={
              activeTab === index
                ? [styles.activeTab, pickBy({ backgroundColor: activeTabColor })]
                : [styles.tab, { backgroundColor: unActiveTabColor }]
            }
          >
            <Text
              fontType={activeTab == index ? 'fontBold' : 'fontRegular'}
              color={activeTab === index ? activeTabTextColor : unActiveTabTextColor}
            >
              {value.name}
            </Text>
          </Touchable>
        );
      })}
    </View>
  );
};

export const TabBorderradius = memo(_TabBorderradius);
