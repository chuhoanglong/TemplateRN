import { useContext } from 'react';
import { BottomSheetContext } from '../provider/bottom-sheet/context';

export const useBottomSheet = () => {
  const payload = useContext(BottomSheetContext);
  if (!payload) {
    throw new Error('useBottomSheet must be use within BottomSheetProvider.');
  }
  return payload;
};
