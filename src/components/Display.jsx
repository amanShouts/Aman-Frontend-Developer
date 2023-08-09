import { useSelector } from "react-redux"

export function Display() {
    let data = useSelector((store) => store.mainData.arr)
    console.log(data, " apn data")
    return (
        <div className="grid grid-cols-2 gap-4 p-20 ">
            {
                data?.map((e) => {
                    return (
                        <div key={e.id} className="text-center border-[1px] flex flex-col items-center justify-evenly p-2 rounded-md mb-[30px]">
                            <h1 className="text-2xl hover:tracking-widest text-yellow-400 hover:text-sky-400 transition-all mb-[10px]"> {e.rocket_name}</h1>
                            <h3 className="mb-[10px]">{e.first_flight}</h3>
                            <p className="text-center text-sm"> Engine : {e.engines.type}</p>
                            <img alt="" src={e.flickr_images[0]} className="w-[400px] rounded-sm hover:animate-pulse mb-[10px] " />
                        </div>
                    )
                })
            }
        </div>
    )
}