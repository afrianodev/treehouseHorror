import { useState } from "react";

export default function Header() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    function handleAlert() {
        alert('Lo siento Eliza, esta función todavia no está disponible, intentalo la proxima semana.')
    }

    function toggleDropdown() {
        setDropdownOpen(!isDropdownOpen);
    }

    return (
    <header className='bg-black flex items-center justify-between select-none h-20 w-screen text-slate-50 px-6'>
        <h1 className='text-2xl hover:text-slate-500 transition-colors duration-500 ease-in-out'>Treehouse of Horror</h1>
        <div className='flex items-center gap-8 relative'>
            {!isDropdownOpen ? <p className='cursor-pointer hover:text-slate-500 transition-colors duration-500 ease-in-out' onClick={toggleDropdown}>Categories</p> : <p className='cursor-pointer hover:text-slate-500 mr-8 transition-colors duration-500 ease-in-out' onClick={toggleDropdown}>X</p>}
            {isDropdownOpen && (
                    <div className='absolute top-full -right-2 mt-2 w-48 bg-black shadow-lg rounded-md'>
                        <ul>
                            <li onClick={handleAlert} className='p-2 hover:bg-gray-200 hover:text-black cursor-pointer'>Horror</li>
                            <li onClick={handleAlert} className='p-2 hover:bg-gray-200 hover:text-black cursor-pointer'>Gore</li>
                            <li onClick={handleAlert} className='p-2 hover:bg-gray-200 hover:text-black cursor-pointer'>SciFi</li>
                            <li onClick={handleAlert} className='p-2 hover:bg-gray-200 hover:text-black cursor-pointer'>Thriller</li>
                        </ul>
                    </div>
                )}
            <svg onClick={handleAlert} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className='bi bi-search cursor-pointer hover:text-slate-500 transition-colors duration-400'>
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
        </div>
    </header>
    )
}