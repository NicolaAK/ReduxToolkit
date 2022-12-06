import { IUser } from './../../model/IUser';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
    "user/fetchAll",
    async(_, thunkAPI) =>{
        const responce = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users") 
        console.log(responce.data)
        return responce.data
        
    }
)