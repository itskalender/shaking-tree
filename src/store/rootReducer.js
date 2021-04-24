import { getFallingDelay, getAppleId } from '../shared/utility';
import * as actionTypes from './actionTypes';

const initialState = {
  // prettier-ignore
  applesOnTree: [
    { id: getAppleId(), coordX: '45%', coordY: '5%', fallingDelay: getFallingDelay(), didFall: false },
    { id: getAppleId(), coordX: '70%', coordY: '0%', fallingDelay: getFallingDelay(), didFall: false },
    { id: getAppleId(), coordX: '95%', coordY: '40%', fallingDelay: getFallingDelay(), didFall: false },
    { id: getAppleId(), coordX: '75%', coordY: '80%', fallingDelay: getFallingDelay(), didFall: false },
    { id: getAppleId(), coordX: '40%', coordY: '45%', fallingDelay: getFallingDelay(), didFall: false },
    { id: getAppleId(), coordX: '90%', coordY: '90%', fallingDelay: getFallingDelay(), didFall: false },
    { id: getAppleId(), coordX: '5%', coordY: '50%', fallingDelay: getFallingDelay(), didFall: false },
    { id: getAppleId(), coordX: '60%', coordY: '40%', fallingDelay: getFallingDelay(), didFall: false },
    { id: getAppleId(), coordX: '10%', coordY: '15%', fallingDelay: getFallingDelay(), didFall: false },
    { id: getAppleId(), coordX: '10%', coordY: '80%', fallingDelay: getFallingDelay(), didFall: false },
    { id: getAppleId(), coordX: '60%', coordY: '10%', fallingDelay: getFallingDelay(), didFall: false },
    { id: getAppleId(), coordX: '20%', coordY: '35%', fallingDelay: getFallingDelay(), didFall: false },
    { id: getAppleId(), coordX: '35%', coordY: '75%', fallingDelay: getFallingDelay(), didFall: false },
    { id: getAppleId(), coordX: '30%', coordY: '15%', fallingDelay: getFallingDelay(), didFall: false },
  ],
  applesInBasket: [],
  isShaking: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHAKE_THE_TREE:
      return {
        ...state,
        isShaking: true,
      };
    case actionTypes.STOP_THE_TREE:
      return {
        ...state,
        isShaking: false,
      };
    case actionTypes.DROP_THE_APPLES:
      // The datas of apples that are on the tree
      const applesOnTree = state.applesOnTree.filter(
        apple => apple.didFall === false
      );

      // The Ids of apples that are on tree
      const appleIdsOnTree = applesOnTree.map(apple => apple.id);

      // Number of Apples on the tree
      const appleAmountOnTree = applesOnTree.length;
      if (appleAmountOnTree === 0) return { ...state };

      // Will be dropped apple amount (The number is going to be between 1 and the amount of apples on the tree)
      const droppedAppleAmount =
        Math.floor(Math.random() * appleAmountOnTree) + 1;

      // Will be Dropped Apple Ids (The apples are going to be the first decided amount in the 'applesOnTree' array)
      const droppedAppleIds = appleIdsOnTree.splice(0, droppedAppleAmount);

      // Immutable Updating
      const updatedApplesOnTree = [...state.applesOnTree];

      // // Finding indexes of dropped apples in 'applesOnTree' array
      const indexesOfDroppedApples = [];
      for (let id of droppedAppleIds) {
        indexesOfDroppedApples.push(
          updatedApplesOnTree.findIndex(apple => apple.id === id)
        );
      }

      // // Updating the dropped apples depending on indexes
      for (let index of indexesOfDroppedApples) {
        const updatedApple = { ...updatedApplesOnTree[index] };
        updatedApple.didFall = true;
        updatedApplesOnTree[index] = updatedApple;
      }

      return {
        ...state,
        applesOnTree: updatedApplesOnTree,
      };

    case actionTypes.COLLECT_THE_APPLES:
      const updatedApplesOnTreeData = [...state.applesOnTree];

      // Finding out which apple should be in the basket
      const updatedIndex = updatedApplesOnTreeData.findIndex(
        apple => apple.id === action.id && apple.didFall === true
      );

      // Collecting the apple from the ground
      updatedApplesOnTreeData.splice(updatedIndex, 1);

      // Updating the 'applesInBasket' array
      const updatedApplesInBasket = [...state.applesInBasket];
      updatedApplesInBasket.push(action.id);

      return {
        ...state,
        applesOnTree: updatedApplesOnTreeData,
        applesInBasket: updatedApplesInBasket,
      };

    default:
      return state;
  }
};

export default rootReducer;
