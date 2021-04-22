import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tree from '../../components/Tree/Tree';
import Button from '../../components/UI/Button/Button';
import Basket from '../../components/Basket/Basket';

import * as actions from '../../store/actionCreators';

class TreeShaking extends Component {
  render() {
    return (
      <React.Fragment>
        <Tree apples={this.props.apples} isShaking={this.props.isShaking} />
        <Basket apples={this.props.applesInBasket} />
        <Button onClick={this.props.onClick} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    apples: state.apples,
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
