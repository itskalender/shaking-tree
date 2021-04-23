import React, { Component } from 'react';

import tree from '../../../assets/images/tree.svg';

import styles from './Button.module.css';

class Button extends Component {
  componentDidMount() {
    const btnContainer = document.querySelector(
      `.${styles['button-container']}`
    );
    const btnTree = document.querySelector(
      `.${styles['button-container__tree']}`
    );
    btnContainer.addEventListener('mouseenter', () => {
      btnTree.classList.add(`${styles['shaking-animation']}`);
    });
    btnContainer.addEventListener('mouseleave', () => {
      btnTree.classList.remove(`${styles['shaking-animation']}`);
    });
  }

  render() {
    return (
      <div className={styles['button-container']} onClick={this.props.onClick}>
        <button type="button" className={styles['button-container__button']}>
          Shake the
        </button>
        <img
          src={tree}
          alt="icon-tree"
          className={styles['button-container__tree']}
        />
      </div>
    );
  }
}

export default Button;
