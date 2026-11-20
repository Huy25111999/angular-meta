import { createReducer, on } from '@ngrx/store';
import * as UserActions from "./users-management.actions";

export const userFeatureKey = 'userFeatureKey';

//Định nghĩa interface cho state người dùng
export interface UserState {
    listUserState: {
        data?: any;
        error?: any;
        loading?: boolean;
        success?: boolean;
    };
}

// Khởi tạo giá trị ban đầu cho state người dùng
export const initialUserState: UserState = {
    listUserState: {
        data: null,
        error: null,
        loading: false,
        success: false,
    },
}

//Tạo reducer để xử lý các action liên quan đến người dùng
export const userReducer = createReducer(
    initialUserState,

    // Khi bắt đâu gọi api danh sách users
    on(UserActions.getListUsers, (state) => ({
        ...state,
        listUserState: {
            ...initialUserState.listUserState,
            loading: true,
        }
    })),

    // Khi gọi API thành công và có dữ liệu trả về, cập nhật state với dữ liệu mới
    on(UserActions.getListUsersSuccess, (state, { success }) => ({
        ...state,
        listUserState: {
            ...initialUserState.listUserState,
            loading: false,
            success: true,
            data: success
        }
    })),

    // Khi gọi API thất bại, cập nhật state với thông tin lỗi
    on(UserActions.getListUsersFail, (state, { error }) => ({
        ...state,
        listUserState: {
            ...initialUserState.listUserState,
            loading: false,
            success: false,
            error: error
        }
    })),
)