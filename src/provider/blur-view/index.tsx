import { BlurView } from '@components/blur-view';
import React, { useCallback, useMemo, useState } from 'react';
import { BlurViewContext } from './context';
import { BlurViewContextValue, BlurViewProps } from './types';

const BlurViewProvider = ({ children }: BlurViewProps) => {
  const [isShow, setIsShow] = useState(false);
  const [child, setChild] = useState<React.ReactNode>();
  const [position, setPosition] = useState();
  const [type, setType] = useState<any>('zoom');

  const onShow = useCallback((c: React.ReactNode, p: any, t?: 'bottom' | 'zoom') => {
    setChild(c);
    setIsShow(true);
    setPosition(p);
    setType(t);
  }, []);

  const onHide = useCallback(() => {
    setIsShow(false);
  }, []);

  const contextValue = useMemo<BlurViewContextValue>(
    () => ({
      onShow,
      onHide,
    }),
    [onHide, onShow],
  );
  return (
    <>
      <BlurViewContext.Provider value={contextValue}>{children}</BlurViewContext.Provider>
      {isShow && <BlurView {...{ child, onHide, position, type }} />}
    </>
  );
};

export default BlurViewProvider;
