import { createFeatureSelector, createSelector } from "@ngrx/store";
import { userFeatureKey, UserState } from "./users-management.reduces";

export const selectUserState =  createFeatureSelector<UserState>(userFeatureKey);

//Lits user
export const selectUserListSuccess = createSelector(
    selectUserState,
    (state: UserState) => state.listUserState?.data
);

export const selectUserListError = createSelector(
    selectUserState,
    (state: UserState) => state.listUserState?.error
);

export const selectUserListLoading = createSelector(
    selectUserState,
    (state: UserState) => state.listUserState?.loading
);