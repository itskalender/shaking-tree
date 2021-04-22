import * as actionTypes from './actionTypes';

const initialState = {
  // prettier-ignore
  apples: [
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
      // Apples on Tree
      const applesOnTree = state.apples.filter(
        apple => apple.didFall === false
      );

      // Apple Ids on Tree
      const appleIds = applesOnTree.map(apple => apple.id);

      // Number of Apples on Tree
      const appleAmountOnTree = applesOnTree.length;

      // Will be Dropped Apple Amount
      const droppedAppleAmount =
        Math.floor(Math.random() * appleAmountOnTree) + 1;
      // console.log(droppedAppleAmount);

      // Will be Dropped Apple Ids
      const droppedAppleIds = appleIds.splice(0, droppedAppleAmount);
      // console.log(droppedAppleIds);

      // Immutable Updating
      const copiedApplesData = [...state.apples];

      // // Finding indexes in state.apples
      const appleGeneralIndexes = [];
      for (let id of droppedAppleIds) {
        appleGeneralIndexes.push(
          copiedApplesData.findIndex(apple => apple.id === id)
        );
      }
      // console.log(appleGeneralIndexes);

      // // Updating depend on indexes
      for (let index of appleGeneralIndexes) {
        const copiedAppleData = { ...copiedApplesData[index] };
        copiedAppleData.didFall = true;
        copiedApplesData[index] = copiedAppleData;
      }

      // console.log(copiedApplesData);

      return {
        ...state,
        apples: copiedApplesData,
      };
    case actionTypes.COLLECT_THE_APPLES:
      const copiedApples = [...state.apples];
      const updatedIndex = copiedApples.findIndex(
        apple => apple.id === action.id && apple.didFall === true
      );
      // console.log(updatedIndex);
      copiedApples.splice(updatedIndex, 1);
      // console.log(copiedApples);

      // Updating Apples in Basket
      const updatedApplesInBasket = [...state.applesInBasket];
      updatedApplesInBasket.push(action.id);

      return {
        ...state,
        apples: copiedApples,
        applesInBasket: updatedApplesInBasket,
      };

    default:
      return state;
  }
};

export default rootReducer;
