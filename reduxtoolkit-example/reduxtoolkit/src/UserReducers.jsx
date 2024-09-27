import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { userList } from './data'

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },

        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const updatedRecord = state.find((user) => user.id == id);
            if (updatedRecord) {
                updatedRecord.name = name;
                updatedRecord.email = email;
            }
        },

        deleteUser: (state, action) => {
            const { id } = action.payload;
            const deletedRecord = state.find((user) => user.id == id);
            if (deletedRecord) {
                return state.filter(user => user.id !== deletedRecord.id);
            }
        }
    }
})
export const { addUser, updateUser, deleteUser } = userSlice.actions
export default userSlice.reducer;
