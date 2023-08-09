import { AiFillMail, AiFillGithub } from "react-icons/ai"

export function Footer() {
    return (
        <div className="h-[100px] flex justify-evenly items-center bg-gray-800 opacity-70"
            onScroll={(e) => console.log(e.target.value)}>
            <AiFillMail className="text-2xl" />
            <p className="text-2xl tracking-tighter bg-gray-900 p-5 rounded-3xl"> Contact us</p>
            <AiFillGithub className="text-2xl" />
        </div>
    )
}