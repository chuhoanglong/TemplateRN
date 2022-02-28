import { Copied } from '@components/copied';
import { useClipboard } from '@react-native-community/hooks';
import React, { useCallback, useMemo, useState } from 'react';
import { CopiedContext } from './context';
import { CopiedContextValue, CopiedProps } from './types';

const CopiedProvider = ({ children }: CopiedProps) => {
  const [isShow, setIsShow] = useState(false);
  const [data, setString] = useClipboard();

  const onHide = useCallback(() => {
    setIsShow(false);
  }, []);

  const onShow = useCallback(
    (content?: string) => {
      setIsShow(true);
      setTimeout(() => {
        onHide();
      }, 2000);
      content && setString(content);
    },
    [onHide, setString],
  );

  const contextValue = useMemo<CopiedContextValue>(
    () => ({
      onShow,
      onHide,
    }),
    [onShow, onHide],
  );
  return (
    <>
      <CopiedContext.Provider value={contextValue}>{children}</CopiedContext.Provider>
      {isShow && <Copied />}
    </>
  );
};

export default CopiedProvider;
