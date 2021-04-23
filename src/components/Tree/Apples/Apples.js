import React from 'react';

import Apple from './Apple/Apple';

import styles from './Apples.module.css';

const Apples = props => {
  return (
    <div className={styles['apples-container']}>
      {props.apples.map(apple => (
        <Apple
          key={apple.id}
          id={apple.id}
          left={apple.coordX}
          top={apple.coordY}
          didFall={apple.didFall}
          fallingDelay={apple.fallingDelay}
        />
      ))}
    </div>
  );
};

export default Apples;
