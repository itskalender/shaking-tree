import React from 'react';

import styles from './Button.module.css';

const Button = props => {
  return (
    <button type="button" className={styles.button} onClick={props.onClick}>
      Shake the Tree
    </button>
  );
};

export default Button;
