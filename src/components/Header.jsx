import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {

    return (
    <header className='bg-[#262626] flex items-center justify-between select-none h-20 w-screen px-4'>
        <img src="https://i.imgur.com/vcxyAEn.png" alt="short bites logo" className='h-8 cursor-pointer' />

        <div className='flex items-center gap-4'>
        <FaMagnifyingGlass className="text-2xl text-slate-200 cursor-pointer" />
        <FaUserCircle className="text-4xl text-slate-200 cursor-pointer" />
        </div>
    </header>
    )
}