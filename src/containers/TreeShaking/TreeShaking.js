import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tree from '../../components/Tree/Tree';
import Basket from '../../components/Basket/Basket';
import Button from '../../components/UI/Button/Button';

import * as actions from '../../store/actionCreators';

import styles from './TreeShaking.module.css';

class TreeShaking extends Component {
  render() {
    return (
      <div className={styles['tree-shaking']}>
        <Tree
          apples={this.props.applesOnTree}
          isShaking={this.props.isShaking}
        />
        <Basket apples={this.props.applesInBasket} />
        <Button onClick={this.props.onClick} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    applesOnTree: state.applesOnTree,
    applesInBasket: state.applesInBasket,
    isShaking: state.isShaking,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(actions.startShakingTheTree()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TreeShaking);
