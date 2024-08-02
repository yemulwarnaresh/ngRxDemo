import {
  createFeatureSelector,
  createSelector,
  createAction,
  createReducer,
  on,
  Action,
  props,
} from '@ngrx/store';
import { UsersData } from '../data/dataList';

// creat Action

export const addUser = createAction(
  'addUser',
  props<{ id: string; name: string; username: string }>()
);
export const updateUser = createAction(
  'updateUser',
  props<{ id: string; name: string; username: string }>()
);
export const deleteUser = createAction('deleteUser', props<{ id: string }>());

export const getInitialData = createAction(
  'getUser', props<{usersDatas: User[]}>()
)

// Create State

export interface User {
  id: string;
  name: string;
  username: string;
}

export interface userState {
  usersDatas: User[];
}

const initialState: userState = {
  usersDatas: [],
};

// Creat Reducer

const _userReducer = createReducer(
  initialState,
  on(addUser, (state, action) => {
    return {
      ...state,
      usersDatas: [...state.usersDatas, { ...action }],
    };
  }),

  on(getInitialData, (state, action) => {
    return {
        ...state, usersDatas:action.usersDatas
    };
  }),

  on(updateUser, (state, action) => {
    const updatedUser = state.usersDatas.map((items) => {
      return items.id === action.id ? action : items;
    });
    return {
      ...state,
      usersDatas: updatedUser,
    };
  }),
  on(deleteUser, (state, action) => {
    const deleteUser = state.usersDatas.filter((item) => {
      return item.id !== action.id;
    });
    return {
      ...state,
      usersDatas: deleteUser,
    };
  })
);

export function userReducer(state: userState | undefined, action: Action) {
  return _userReducer(state, action);
}

//state selectors

export const getState = createFeatureSelector<userState>('user');

// userdata

export const getUserData = createSelector(getState, (state) => {
  return state.usersDatas;
});
