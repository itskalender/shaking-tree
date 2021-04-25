import React from 'react';

import tree from '../../assets/images/tree.svg';
import Apples from './Apples/Apples';

import styles from './Tree.module.css';

const Tree = props => {
  const shakingAnimation = props.isShaking ? styles['shaking-animation'] : '';
  return (
    <div className={`${styles['tree-container']} ${shakingAnimation}`}>
      <Apples apples={props.apples} />
      <img src={tree} className={styles['tree-container__tree']} alt="tree" />
    </div>
  );
};

export default Tree;
