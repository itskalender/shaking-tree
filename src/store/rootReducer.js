import * as actionTypes from './actionTypes';

const initialStore = {
  // prettier-ignore
  apples: [
    { id: 'apple1', coordX: '10px', coordY: '10px', fallDuration: 1, didFell: false },
    { id: 'apple2', coordX: '100px', coordY: '15px', fallDuration: 2, didFell: false },
    { id: 'apple3', coordX: '150px', coordY: '20px', fallDuration: 3, didFell: false },
    { id: 'apple4', coordX: '180px', coordY: '70px', fallDuration: 2, didFell: false },
    { id: 'apple5', coordX: '320px', coordY: '120px', fallDuration: 1, didFell: false },
    { id: 'apple6', coordX: '25px', coordY: '80px', fallDuration: 3, didFell: false },
    { id: 'apple7', coordX: '300px', coordY: '10px', fallDuration: 2, didFell: false },
    { id: 'apple8', coordX: '390px', coordY: '60px', fallDuration: 2, didFell: false },
    { id: 'apple9', coordX: '390px', coordY: '60px', fallDuration: 2, didFell: false },
    { id: 'apple10', coordX: '390px', coordY: '60px', fallDuration: 2, didFell: false },
  ],
  isShaking: false,
};

const rootReducer = (state = initialStore, action) => {
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
        apple => apple.didFell === false
      );

      // Apple Ids on Tree
      const appleIds = applesOnTree.map(apple => apple.id);

      // Number of Apples on Tree
      const appleAmountOnTree = applesOnTree.length;

      // Will be Dropped Apple Amount
      const droppedAppleAmount =
        Math.floor(Math.random() * appleAmountOnTree) + 1;
      console.log(droppedAppleAmount);

      // Will be Dropped Apple Ids
      const droppedAppleIds = appleIds.splice(0, droppedAppleAmount);
      console.log(droppedAppleIds);

      // Immutable Updating
      const copiedApplesData = [...state.apples];

      const appleGeneralIndexes = [];
      for (let id of droppedAppleIds) {
        appleGeneralIndexes.push(
          copiedApplesData.findIndex(apple => apple.id === id)
        );
      }
      console.log(appleGeneralIndexes);

      for (let index of appleGeneralIndexes) {
        const copiedAppleData = { ...copiedApplesData[index] };
        copiedAppleData.didFell = true;
        copiedApplesData[index] = copiedAppleData;
      }

      console.log(copiedApplesData, 'SON HAL');

      return {
        ...state,
        apples: copiedApplesData,
      };
    default:
      return state;
  }
};

export default rootReducer;
