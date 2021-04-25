import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FALLING_DURATION, WAITING_DURATION } from '../../../../shared/config'; // I use these times(s) for calculating collecting delay time for each of the apples.
import apple from '../../../../assets/images/apple.svg';
import * as actions from '../../../../store/actionCreators';

import styles from './Apple.module.css';

class Apple extends Component {
  // I did check this equality in concern of avoiding infinite loop.
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.didFall !== nextProps.didFall;
  }

  // onFall event happens whenever one of the apples has 'true' value for didFall property. In actionCreators, I use the 'id' and 'collectingDelay' for fading the apples out asynchronously.
  componentDidUpdate() {
    const collectingDelay =
      this.props.fallingDelay + FALLING_DURATION + WAITING_DURATION;
    if (this.props.didFall) {
      this.props.onFall(this.props.id, collectingDelay);
    }
  }

  render() {
    const didFall = this.props.didFall ? styles['falling-animation'] : '';

    return (
      <img
        src={apple}
        alt="apple"
        className={`${styles.apple} ${didFall}`}
        style={{
          left: this.props.left,
          top: this.props.top,
          animationDuration: `${FALLING_DURATION}s`,
          animationDelay: `${this.props.fallingDelay}s`,
          position: this.props.inBasket ? 'static' : 'absolute', // I implemeted this for positioning the apples which are in basket easily.
        }}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFall: (id, collectingDelay) =>
      dispatch(actions.startCollectingTheApples(id, collectingDelay)),
  };
};

export default connect(null, mapDispatchToProps)(Apple);
