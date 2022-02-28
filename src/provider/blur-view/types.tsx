import { ReactNode } from 'react';

export interface BlurViewProps {
  children: ReactNode;
}

export interface BlurViewContextValue {
  onShow: (
    child: React.ReactNode,
    position?: { top?: number; right?: number; bottom?: number; left?: number },
    type?: 'bottom' | 'zoom',
  ) => void;
  onHide: () => void;
}
