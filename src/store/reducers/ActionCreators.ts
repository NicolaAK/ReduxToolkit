import { userSlice } from './UserSlice';
import { IUser } from './../../model/IUser';
import axios from 'axios';
import { AppDispatch } from './../store';


export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const responce = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
        dispatch(userSlice.actions.usersFetchingSuccess(responce.data))
    }
    catch (e: any) {
        dispatch(userSlice.actions.usersFetchingError(e.message))
    }
}