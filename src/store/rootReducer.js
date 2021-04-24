import * as actionTypes from './actionTypes';

const initialState = {
  // prettier-ignore
  applesOnTree: [
    { id: 'apple1', coordX: '45%', coordY: '5%', fallingDelay: 1, didFall: false },
    { id: 'apple2', coordX: '70%', coordY: '0%', fallingDelay: 2, didFall: false },
    { id: 'apple3', coordX: '95%', coordY: '40%', fallingDelay: 3, didFall: false },
    { id: 'apple4', coordX: '75%', coordY: '80%', fallingDelay: 4, didFall: false },
    { id: 'apple5', coordX: '40%', coordY: '45%', fallingDelay: 5, didFall: false },
    { id: 'apple6', coordX: '90%', coordY: '90%', fallingDelay: 3, didFall: false },
    { id: 'apple7', coordX: '5%', coordY: '50%', fallingDelay: 4, didFall: false },
    { id: 'apple8', coordX: '60%', coordY: '40%', fallingDelay: 3, didFall: false },
    { id: 'apple9', coordX: '10%', coordY: '15%', fallingDelay: 2, didFall: false },
    { id: 'apple10', coordX: '10%', coordY: '80%', fallingDelay: 5, didFall: false },
    { id: 'apple11', coordX: '60%', coordY: '10%', fallingDelay: 4, didFall: false },
    { id: 'apple12', coordX: '20%', coordY: '35%', fallingDelay: 3, didFall: false },
    { id: 'apple13', coordX: '35%', coordY: '75%', fallingDelay: 1, didFall: false },
    { id: 'apple14', coordX: '30%', coordY: '15%', fallingDelay: 1, didFall: false },
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

      // Will be dropped apple amount (The number is going to be between 1 and the amount of apples on the tree).
      const droppedAppleAmount =
        Math.floor(Math.random() * appleAmountOnTree) + 1;

      // Will be Dropped Apple Ids (The apples are going to be the first decided amount in the 'applesOnTree' array).
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
