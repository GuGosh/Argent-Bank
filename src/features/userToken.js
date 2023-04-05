import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: ''
};

export const userTokenSlice = createSlice({
    name: 'userToken',
    initialState,

    reducers: {
        addToken: (state, action) => {
            state.token = action.payload.token
        },
        removeToken: (state, action) => {
            state.token = ''
        },
    },
});

export const { addToken, removeToken } = userTokenSlice.actions;

export const selectToken = (state) => state.userToken.token;

export default userTokenSlice.reducer;