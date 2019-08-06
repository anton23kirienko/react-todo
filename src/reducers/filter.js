import * as CONSTANTS from './../constants';

const defaultState = {
  appliedFilter: CONSTANTS.FILTER_ALL
};

export default (state = defaultState, action) => {

  if (action.type === CONSTANTS.CHANGE_FILTER) {
    return { appliedFilter: action.filter }
  }

  return state;
};
