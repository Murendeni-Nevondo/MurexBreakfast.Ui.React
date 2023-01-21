import { updateStart, updateSuccess, updateError, getUserStart, getUserSuccess, getUserError } from './userSlice';
import { updateUserProfile, getUser } from '../services/userService';

export const updateUser = async (user, dispatch, userId) => {
    dispatch(updateStart());

    try {
        const res = await updateUserProfile(user,userId);
        dispatch(updateSuccess(res.data));
    } catch (error) {
        dispatch(updateError());
    }
}

export const getUserFromDb = async (dispatch,userId) => {
    dispatch(getUserStart())
    try {
        const res = await getUser(userId);
        dispatch(getUserSuccess(res.data));
    } catch (error) {
        dispatch(getUserError())
    }
}