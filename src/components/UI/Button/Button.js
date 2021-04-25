import React from 'react';

import tree from '../../../assets/images/tree.svg';

import styles from './Button.module.css';

const Button = props => {
  const mouseEventHandler = e => {
    const btnContainer = e.target.closest(`.${styles['button-container']}`);
    const iconTree = btnContainer.querySelector(
      `.${styles['button-container__tree']}`
    );
    iconTree.classList.toggle(`${styles['shaking-animation']}`);
  };

  return (
    <div
      className={styles['button-container']}
      onClick={props.onClick}
      onMouseEnter={mouseEventHandler}
      onMouseLeave={mouseEventHandler}
    >
      <button type="button" className={styles['button-container__button']}>
        <span>Shake the </span>
      </button>
      <img
        src={tree}
        alt="icon-tree"
        className={styles['button-container__tree']}
      />
    </div>
  );
};

export default Button;

// I used component life cycle hooks so I would be able to select elements and use shaking effect for icon-tree.
// componentDidMount() {
//   const btnContainer = document.querySelector(
//     `.${styles['button-container']}`
//   );
//   const btnTree = document.querySelector(
//     `.${styles['button-container__tree']}`
//   );
//   btnContainer.addEventListener('mouseenter', () => {
//     btnTree.classList.add(`${styles['shaking-animation']}`);
//   });
//   btnContainer.addEventListener('mouseleave', () => {
//     btnTree.classList.remove(`${styles['shaking-animation']}`);
//   });
// }

// const mouseLeaveHandler = e => {
//   const btnContainer = e.target.closest(`.${styles['button-container']}`);
//   const iconTree = btnContainer.querySelector(
//     `.${styles['button-container__tree']}`
//   );
//   iconTree.classList.remove(`${styles['shaking-animation']}`);
// };
