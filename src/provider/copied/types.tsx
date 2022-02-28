import { ReactNode } from 'react';

export interface CopiedProps {
  children: ReactNode;
}

export interface CopiedContextValue {
  onShow: (content?: string) => void;
  onHide: () => void;
}
