import React from 'react';

type ErrorHandler = (error: Error, info: React.ErrorInfo) => void;
type ErrorHandlingComponent<Props> = (props: Props, error?: Error) => React.ReactNode;

type ErrorState = { error?: Error };

export default function Catch<Props extends {}>(
  component: ErrorHandlingComponent<Props>,
  errorHandler?: ErrorHandler,
): React.ComponentType<Props> {
  return class extends React.Component<Props, ErrorState> {
    state: ErrorState = {
      error: undefined,
    };

    static getDerivedStateFromError(error: Error) {
      console.log(
        `🛠 LOG: 🚀 --> ------------------------------------------------------------------------------------------------------------------`,
      );
      console.log(
        `🛠 LOG: 🚀 --> ~ file: functional-error-boundary.tsx ~ line 18 ~ extends ~ getDerivedStateFromError ~ error`,
        error,
      );
      console.log(
        `🛠 LOG: 🚀 --> ------------------------------------------------------------------------------------------------------------------`,
      );
      return { error };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
      if (errorHandler) {
        errorHandler(error, info);
      }
    }

    render() {
      return component(this.props, this.state.error);
    }
  };
}
