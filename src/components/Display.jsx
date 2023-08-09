import { useSelector } from "react-redux"
import { TransitionsModal } from "./Modal"
import { useState } from "react"

export function Display() {
    const [modalData, setModalData] = useState({})
    const [shouldOpen, setShouldOpen] = useState(false)

    let data = useSelector((store) => store.mainData.arr)
    let filteredData = useSelector((store) => store.mainData.filterArr)
    console.log(data, " apn data", filteredData)

    function openModal(element) {
        setShouldOpen(prev => true)
        setModalData(prev => element)
    }

    return (
        <div className="grid grid-cols-2 gap-4 p-20 ">
            {
                filteredData?.length > 0 ?
                    filteredData?.map((e) => {
                        return (
                            <div key={e.id} className="text-center border-[1px] flex flex-col items-center justify-evenly p-2 rounded-md mb-[30px]"
                                onClick={() => { openModal(e) }}>
                                <h1 className="text-2xl hover:tracking-widest text-yellow-400 hover:text-sky-400 transition-all mb-[10px]"> {e.rocket_name}</h1>
                                <h3 className="mb-[10px]">{e.first_flight}</h3>
                                <p className="text-center text-sm"> Engine : {e.engines.type}</p>
                                <img alt={e.rocket_name} src={e.flickr_images[0]} className="w-[400px] rounded-sm hover:animate-pulse mb-[10px] " />
                            </div>
                        )
                    })
                    :
                    <>
                        {
                            data?.map((e) => {
                                return (
                                    <div key={e.id} className="text-center border-[1px] flex flex-col items-center justify-evenly p-2 rounded-md mb-[30px]"
                                        onClick={() => { openModal(e) }}>
                                        <h1 className="text-2xl hover:tracking-widest text-yellow-400 hover:text-sky-400 transition-all mb-[10px]"> {e.rocket_name}</h1>
                                        <h3 className="mb-[10px]">{e.first_flight}</h3>
                                        <p className="text-center text-sm"> Engine : {e.engines.type}</p>
                                        <img alt={e.rocket_name} src={e.flickr_images[0]} className="w-[400px] rounded-sm hover:animate-pulse mb-[10px] " />
                                    </div>
                                )
                            })
                        }
                    </>


            }
            {shouldOpen == true ? <TransitionsModal modalData={modalData} shouldOpen={shouldOpen} setShouldOpen={setShouldOpen} /> : <></>}
        </div >
    )
}