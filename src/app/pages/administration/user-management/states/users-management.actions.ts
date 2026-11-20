
import {createAction, props} from '@ngrx/store';

export const getListUsers = createAction('[Users Management] Get List Users', props<{payload: any}>());
export const getListUsersSuccess = createAction('[Users Management] Get List Users Success', props<{success: any[]}>());
export const getListUsersFail = createAction('[Users Management] Get List Users Failure', props<{error: any}>());