import React from 'react';

import tree from '../../assets/images/tree.svg';
import Apples from './Apples/Apples';

import styles from './Tree.module.css';

const Tree = props => {
  const animate = props.isShaking ? styles.animation : '';

  return (
    <div className={`${styles['tree-container']} ${animate}`}>
      <Apples apples={props.apples} />
      <img src={tree} className={styles.tree} alt="tree" />
    </div>
  );
};

export default Tree;
