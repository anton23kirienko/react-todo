import * as CONSTANTS from './../constants';

export const changeFilter = filter => dispatch => {
  dispatch({
    type: CONSTANTS.CHANGE_FILTER,
    filter
  });
}
