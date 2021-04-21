import React from 'react';

import Apple from './Apple/Apple';

import styles from './Apples.module.css';

const Apples = props => {
  return (
    <div className={styles['apples-container']}>
      {props.apples.map((apple, index) => (
        <Apple key={index} left={apple.coordX} top={apple.coordY} />
      ))}
    </div>
  );
};

export default Apples;
