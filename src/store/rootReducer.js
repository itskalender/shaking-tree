import * as actionTypes from './actionTypes';

const initialState = {
  // prettier-ignore
  apples: [
    { id: 'apple1', coordX: '10px', coordY: '10px', fallingDelay: 1, didFall: false },
    { id: 'apple2', coordX: '100px', coordY: '15px', fallingDelay: 2, didFall: false },
    { id: 'apple3', coordX: '150px', coordY: '20px', fallingDelay: 3, didFall: false },
    { id: 'apple4', coordX: '180px', coordY: '70px', fallingDelay: 4, didFall: false },
    { id: 'apple5', coordX: '320px', coordY: '120px', fallingDelay: 5, didFall: false },
    { id: 'apple6', coordX: '25px', coordY: '80px', fallingDelay: 6, didFall: false },
    { id: 'apple7', coordX: '300px', coordY: '10px', fallingDelay: 7, didFall: false },
    { id: 'apple8', coordX: '390px', coordY: '60px', fallingDelay: 8, didFall: false },
    { id: 'apple9', coordX: '400px', coordY: '100px', fallingDelay: 9, didFall: false },
    { id: 'apple10', coordX: '350px', coordY: '120px', fallingDelay: 10, didFall: false },
  ],
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
      console.log(updatedIndex);
      copiedApples.splice(updatedIndex, 1);
      console.log(copiedApples);

      return {
        ...state,
        apples: copiedApples,
      };

    default:
      return state;
  }
};

export default rootReducer;
