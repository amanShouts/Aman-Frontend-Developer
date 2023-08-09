import { useEffect, useState } from "react"
import { Pagination } from "./Pagination"
import { Display } from "./Display"
import { add, remove } from "../redux/dataSlice.js"
import { useDispatch } from 'react-redux'
export function SearchRocket() {

    const dispatch = useDispatch()

    useEffect(() => {
        // fetch data here 
        const URL = "https://api.spacexdata.com/v3/rockets"
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data, " data received")
                dispatch(add(data))
            })

    }, [])

    return (
        <div className="text-white pt-[40px]">
            <div className="">
                <h1 className="flex justify-center items-center text-5xl font-mono animate-pulse  hover:tracking-widest transition-all duration-500 hover:animate-bounce">
                    Find the rocket 🚀 you love
                </h1>
                <div className="mt-[70px] flex justify-evenly items-center">
                    <div className="flex justify-between items-center w-[15vw]">
                        <label className="border-b-2 pb-1"> Engine Type :</label>
                        <select name="engine" id="cars" className="text-black rounded-md h-[35px] w-[120px]">
                            <option value="volvo">None</option>
                            <option value="saab">Raptor</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div className="flex justify-between items-center w-[15vw]">
                        <label className="border-b-2 pb-1">First Flight :</label>
                        <select name="first_flight" className="text-black rounded-md h-[35px] w-[120px]">
                            <option value="none">none</option>
                            <option value="asc">Asc</option>
                            <option value="desc">Desc</option>
                        </select>
                    </div>
                    <div className="flex justify-between items-center w-[15vw]">
                        <label className="border-b-2 pb-1">Status :</label>
                        <select name="status" className="text-black rounded-md h-[35px] w-[120px]">
                            <option value="none">none</option>
                            <option value="active">Functional</option>
                            <option value="inactive">Discountinued </option>
                        </select>
                    </div>
                </div>
                <Display />
                <Pagination />
            </div >
        </div >
    )
}