import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class FadeAnim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(this.props.hidden ? 1 : 0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: this.props.hidden ? 0 : 1,
      duration: this.props.duration ? this.props.duration : 600,
      useNativeDriver: false,
    }).start();
  }

  shouldComponentUpdate() {
    Animated.timing(this.state.fadeAnim, {
      toValue: this.props.hidden ? 0 : 1,
      duration: this.props.duration ? this.props.duration : 600,
      useNativeDriver: false,
    }).start();
    return true;
  }
  render() {
    const opacity = this.state.fadeAnim;
    return <Animated.View style={{ ...this.props.style, opacity }}>{this.props.children}</Animated.View>;
  }
}
