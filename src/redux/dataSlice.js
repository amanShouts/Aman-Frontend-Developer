import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arr: [],
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        add: (state, { payload }) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.arr = payload
        },
        remove: (state) => {
            state.arr = []
        },

    },
})

// Action creators are generated for each case reducer function
export const { add, remove } = dataSlice.actions

export default dataSlice.reducer