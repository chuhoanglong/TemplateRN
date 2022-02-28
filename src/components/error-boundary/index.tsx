// // @flow
import React, { ComponentType } from 'react';

import FallbackComponent, { Props as FallbackComponentProps } from './FallBackComponent';

type Props = {
  children: React.ReactNode;
  FallbackComponent: ComponentType<FallbackComponentProps>;
  onError?: () => void;
};

type State = { error: Error | null };

class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };

  static defaultProps: { FallbackComponent: ComponentType<FallbackComponentProps> } = {
    FallbackComponent: FallbackComponent,
  };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    if (typeof this.props.onError === 'function') {
      this.props.onError.call(this, error, info.componentStack);
    }
  }

  resetError = () => {
    this.setState({ error: null });
  };

  render() {
    const { FallbackComponent } = this.props;

    return this.state.error ? (
      <FallbackComponent error={this.state.error} resetError={this.resetError} />
    ) : (
      this.props.children
    );
  }
}

export { ErrorBoundary };
