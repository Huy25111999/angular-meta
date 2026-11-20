import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as UserActions from "./users-management.actions";
import { UsersManagementService } from "../services/users-management.service";
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from "rxjs";

@Injectable()
export class UsersManagementEffects {
    constructor( 
        private actions$: Actions,
        private userService: UsersManagementService
    ) { }

    //Efects lấy danh sách người dùng từ API Actions
    findAllUsers$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.getListUsers),
        switchMap(({payload}) => {
            return this.userService.getListUsers(payload).pipe(
                map((users) => UserActions.getListUsersSuccess({ success: users })),
                catchError((error) => of(UserActions.getListUsersFail({ error })))
            );
        })
    ))

}

