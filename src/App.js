import React, { Component } from 'react';

import TreeShaking from './containers/TreeShaking/TreeShaking';

import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <TreeShaking />
      </div>
    );
  }
}

export default App;
