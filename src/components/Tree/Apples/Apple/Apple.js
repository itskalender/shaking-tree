import React from 'react';

import apple from '../../../../assets/images/apple.svg';

import styles from './Apple.module.css';

const Apple = props => {
  return (
    <img
      src={apple}
      alt="apple"
      className={styles.apple}
      style={{ left: props.left, top: props.top }}
    />
  );
};

export default Apple;
