import { ReactNode, SetStateAction } from 'react';

export interface BottomSheetProps {
  children: ReactNode;
}

export interface BottomSheetContextValue {
  onShow: (b: SetStateAction<React.ReactNode>) => void;
  onHide: () => void;
}
