import { handleActions } from 'redux-actions';

import { toggleNightMode } from './actions';

const reducer = handleActions(
  {
    [toggleNightMode]: (state, { payload }) => ({
      isNightModeToggled: !state.isNightModeToggled,
    }),
  },
  {
    isNightModeToggled: false,
  } // initial state
);

export default reducer;