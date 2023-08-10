import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arr: [],
    filterArr: [],
    filters: {
        engine: "none",
        first_flight: "none",
        status: "none",
    }
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        add: (state, { payload }) => {

            state.arr = payload
            state.filterArr = payload
        },
        remove: (state) => {
            state.arr = []
        },
        addFilter: (state, { payload }) => {
            // add filter will apply given filters 
            const { engine, status, first_flight } = payload

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
            // whenever a new filter is applied - update the filterArr and save
            // the next filter that is applied will update the lastly updated filterArr
            // so no need to check mutiple filters here  

            //OR

            //whenever a new filter is applied, apply all the filters in the filter array from scratch to the mainArr

            if (state.filters.engine == "none" && state.filters.first_flight == "none" && state.filters.status == "none") {
                state.filterArr = state.arr;
                return
            }

            //means atleast 1 filters is non none 

            let tempFilterData = state.arr // main arry 

            if (state.filters.engine != "none") {
                tempFilterData = tempFilterData.filter((elem) => {
                    if (state.filters.engine === elem.engines.type)
                        return true
                    return false
                })
            }

            if (state.filters.status != "none") {
                tempFilterData = tempFilterData.filter((elem) => {
                    if ((state.filters.status == "active" ? true : false) === elem.active)
                        return true
                    return false
                })
            }

            if (state.filters.first_flight != "none") {
                if (state.filters.first_flight == "asc") {
                    console.log("asc")
                    tempFilterData = tempFilterData.slice().sort((a, b) => {
                        a = a.first_flight.split("-").join("")
                        b = b.first_flight.split("-").join("")
                        // console.log(a, b)
                        Number(a) - Number(b)
                    })
                }
                if (state.filters.first_flight == "desc") {
                    console.log("desc")
                    tempFilterData = tempFilterData.slice().sort((a, b) => {
                        a = a.first_flight.split("-").join("")
                        b = b.first_flight.split("-").join("")
                        // console.log(a, b)
                        Number(b) - Number(a)
                    })
                }
            }

            state.filterArr = [...tempFilterData]

        }

    },
})

// Action creators are generated for each case reducer function
export const { add, remove, addFilter, applyFilter } = dataSlice.actions

export default dataSlice.reducer