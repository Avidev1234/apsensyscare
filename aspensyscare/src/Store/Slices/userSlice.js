import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loading: false,
    users: [],
    error: '',
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', async(login) => {
    return await axios
        .post('/backend_api/login_user',login)
        .then((response) => response.data)
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.error = ''
            state.loading = false
            state.users = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    },
})
export default userSlice.reducer
// export const { addUser } = userSlice.actions;