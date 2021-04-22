import React from 'react';

import basket from '../../assets/images/basket-2.svg'; //
import Apple from '../Tree/Apples/Apple/Apple';

import styles from './Basket.module.css';

const Basket = props => {
  return (
    <div className={styles['basket-container']}>
      <div className={styles['basket-container__apples']}>
        {props.apples.map(appleId => (
          <Apple key={appleId} inBasket />
        ))}
      </div>
      <img
        src={basket}
        alt="basket"
        className={styles['basket-container__basket']}
      ></img>
    </div>
  );
};

export default Basket;
