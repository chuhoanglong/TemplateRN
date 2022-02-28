import { BottomSheetCustom } from '@components/bottom-sheet';
import { View } from '@components/view';
import React, { SetStateAction, useCallback, useMemo, useRef, useState } from 'react';
import { BottomSheetContext } from './context';
import { BottomSheetContextValue, BottomSheetProps } from './types';

const BottomSheetProvider = ({ children }: BottomSheetProps) => {
  const bottomSheet = useRef<{ open: (index: number) => void }>();
  const [body, setBody] = useState<React.ReactNode>(<View />);

  const onShow = useCallback((b: SetStateAction<React.ReactNode>) => {
    setBody(b);
    setTimeout(() => {
      bottomSheet.current?.open(2);
    }, 0);
  }, []);

  const onHide = useCallback(() => {
    bottomSheet.current?.open(0);
  }, []);

  const contextValue = useMemo<BottomSheetContextValue>(
    () => ({
      onShow,
      onHide,
    }),
    [onHide, onShow],
  );
  return (
    <>
      <BottomSheetContext.Provider value={contextValue}>{children}</BottomSheetContext.Provider>
      {<BottomSheetCustom header={<></>} body={body} ref={bottomSheet} />}
    </>
  );
};

export default BottomSheetProvider;
