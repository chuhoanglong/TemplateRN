import { createRef } from 'react';
import { NavigationContainerRef, StackActions } from '@react-navigation/native';

export const navigationRef = createRef<NavigationContainerRef>();
export const isMountedRef = createRef();

interface NavigateProps {
  (name: string, params: Record<string, unknown>): void;
}

// Use this function to navigate to specific page when you are using Redux-Saga
export const navigate: NavigateProps = (name, params) => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};

export const replace = (routeName: string, params: { [key: string]: any }) => {
  navigationRef.current?.dispatch(StackActions.replace(routeName, params));
};

export const navigatePop = (): void => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.dispatch(StackActions.pop());
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};

export const popToTop = (): void => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.dispatch(StackActions.popToTop());
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};
