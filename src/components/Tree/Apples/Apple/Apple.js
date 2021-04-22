import React, { Component } from 'react';
import { connect } from 'react-redux';

import apple from '../../../../assets/images/apple.svg';
import * as actions from '../../../../store/actionCreators';

import styles from './Apple.module.css';

const FALLING_DURATION = 0.8;
const WAITING_TIME = 1;

class Apple extends Component {
  // I did check this equality in concern of avoiding loop.
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.didFall !== nextProps.didFall;
  }

  // Eğer elma düşmeye başladıysa event kaynağı
  componentDidUpdate() {
    const collectingDelay =
      this.props.fallingDelay + FALLING_DURATION + WAITING_TIME;
    if (this.props.didFall) {
      this.props.onFall(this.props.id, collectingDelay);
    }
  }

  render() {
    const didFall = this.props.didFall ? styles.animation : '';

    return (
      <img
        src={apple}
        alt="apple"
        className={`${styles.apple} ${didFall}`}
        style={{
          left: this.props.left,
          top: this.props.top,
          animationDelay: `${this.props.fallingDelay}s`,
          position: this.props.inBasket ? 'static' : 'absolute',
          // margin: this.props.inBasket ? '0rem' : '0.5rem',
        }}
      />
    );
  }
}

// Her bir elma kendi id ile bir event oluşturmalı ki, individual olarak fade out olsun.
const mapDispatchToProps = dispatch => {
  return {
    onFall: (id, collectingDelay) =>
      dispatch(actions.startCollectingTheApples(id, collectingDelay)),
  };
};

export default connect(null, mapDispatchToProps)(Apple);
