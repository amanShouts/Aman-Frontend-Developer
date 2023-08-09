import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arr: [],
    filterArr: [],
    filters: {
        engine: "",
        status: "",
        first_flight: ""
    }
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
        addFilter: (state, { payload }) => {
            // add filter will apply given filters 
            const { engine, status, first_flight } = payload
            // console.log(payload, " inside reducerrrrrrrr", engine, status, first_flight)
            if (engine)
                state.filters = { ...state.filters, engine }
            if (status)
                state.filters.status = status
            if (first_flight)
                state.filters.first_flight = first_flight
            console.log(state)
        },

    },
})

// Action creators are generated for each case reducer function
export const { add, remove, addFilter } = dataSlice.actions

export default dataSlice.reducer