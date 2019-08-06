export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_COMPLETED = 'DELETE_COMPLETED';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_ALL = 'TOGGLE_ALL';
export const ANIMATE_UNMOUNT_TODO = 'ANIMATE_UNMOUNT_TODO';
export const ANIMATE_UNMOUNT_COMPLETED = 'ANIMATE_UNMOUNT_COMPLETED';

export const FILTER_ALL = 'FILTER_ALL';
export const FILTER_ACTIVE = 'FILTER_ACTIVE';
export const FILTER_COMPLETED = 'FILTER_COMPLETED';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const ANIMATE_FILTER = 'ANIMATE_FILTER';

// is used to delay dispatches in action creators
// to synchronize animated unmount
export const DELAY = 300;
// is used in transitions for unmounting, should be equal to DELAY
export const DURATION = DELAY/1000 + 's';
