import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arr: [],
    filterArr: [],
    filters: {
        engine: "",
        first_flight: "",
        status: "",
    }
}

// function filterData(paramter, mainArr) {
//     let ansArr;
//     if (paramter != "") {
//         ansArr = mainArr.filter((elem) => {
//             return true
//         })
//     }
// }

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
            if (engine) {
                state.filters.engine = engine
            }
            if (status) {
                state.filters.status = status
            }
            if (first_flight) {
                state.filters.first_flight = first_flight
            }
        },
        applyFilter: (state, { payload }) => {
            // filter here 
            let tempFilterData = state.arr // main arry 
            let f1 = false, f2 = false;

            if (state.filters.engine != "") {
                f1 = true
                tempFilterData = tempFilterData.filter((elem) => {
                    if (state.filters.engine === elem.engines.type)
                        return true
                    return false
                })
            }

            if (state.filters.status != "") {
                tempFilterData = tempFilterData.filter((elem) => {
                    f2 = false
                    if ((state.filters.status == "active" ? true : false) === elem.active)
                        return true
                    return false
                })
            }

            // let thirdFilterData = secondFilterData.filter((elem) => {
            //     if (state.filters.first_flight != "" && state.filters.first_flight === elem.first_flight)
            //         return true
            //     return false
            // })
            console.log(f1, f2, " statusssssssssssss")
            if ((f1 === false && f2 === false) || tempFilterData.length == 0) {
                state.filterArr = undefined
            }
            else {

                state.filterArr = tempFilterData
            }
        }

    },
})

// Action creators are generated for each case reducer function
export const { add, remove, addFilter, applyFilter } = dataSlice.actions

export default dataSlice.reducer