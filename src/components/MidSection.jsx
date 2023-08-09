import { useEffect, useRef, useState } from "react"
import "../css/MidSection.css"
import { SearchRocket } from "./SearchRocket"
import { BsChevronCompactDown } from "react-icons/bs"

export function MidSection() {
    const [dots, setDots] = useState([])
    const [landingText, setLandingText] = useState([])
    const parentRef = useRef(null)
    const childRef = useRef(null)


    useEffect(() => {
        let array = []
        for (let i = 0; i < 200; i++) {
            let x = Math.floor(Math.random() * 80) + ""
            let y = Math.floor(Math.random() * 100) + ""
            array.push({ x, y })
        }
        setDots(prev => [...array])

        let landingTextArr = "Welcome to the future".split("")
        console.log(landingTextArr)
        setLandingText(prev => landingTextArr)


        return () => {

        }
    }, [])

    console.log(dots)

    return (
        <div className="relative overflow-y-scroll h-[100vh] scroll-smooth">
            {/* yes */}
            <div className="h-[90vh] bg-gray-900 mt-[80px]  top-[70px] left-0 sticky flex justify-center items-center" ref={parentRef}>
                <div className="bg-[url('https://images8.alphacoders.com/793/793191.png')] bg-cover h-[90vh] w-[85vw] relative shadow-inner" ref={childRef}>
                    {
                        dots?.map((e, index) => {
                            return (
                                <div key={index}
                                    style={{
                                        top: `${e.y}vh`,
                                        left: `${e.x}vw`,
                                    }}
                                    className={`w-[1px] h-[1px] bg-blue-600 animate top-[${e.x}px] left-[${e.y}px] relative`}>
                                    <div className="bg-white w-[2px] h-[2px]"> </div>
                                </div>
                            )
                        })
                    }
                    <div className="text-left text-white flex flex-wrap justify-evenly items-center text-3xl">
                        {
                            landingText?.map((e, i) => {
                                return (
                                    <p key={i} className="hover:animate-bounce hover:text-4xl transition-all"> {e} </p>
                                )
                            })
                        }
                    </div>
                    <div className="flex justify-center items-center">
                        <BsChevronCompactDown className="text-white text-4xl relative text-center animate-bounce mt-[400px] " />
                    </div>
                </div>

            </div>

            <div className="h-[150vh] bg-gray-900 relative z-10 ">
                <SearchRocket />

            </div>
        </div >
    )
}