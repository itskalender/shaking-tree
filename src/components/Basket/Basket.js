import React from 'react';

import basket from '../../assets/images/basket.svg';

import styles from './Basket.module.css';

const Basket = () => {
  return <img src={basket} alt="basket" className={styles.basket}></img>;
};

export default Basket;
