import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from "../../assets/logo.png";

export default function Sidebar() {
    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const menuItems = [
        { icon: "📊", label: "Repositories", path: "/" },
        { icon: "🔍", label: "AI Code Review", path: "/code-review" },
        { icon: "🔒", label: "Cloud Security", path: "/security" },
        { icon: "📚", label: "How to Use", path: "/guide" },
        { icon: "⚙️", label: "Settings", path: "/settings" },
    ];

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>

            <button
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-white shadow-md"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>


            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={toggleSidebar}
                />
            )}


            <div className={` 
                fixed lg:static w-full h-full bg-white z-40 
                transform transition-transform duration-300 ease-in-out 
                lg:transform-none lg:h-auto lg:w-64
                ${isOpen ? 'translate-y-0' : '-translate-y-full lg:translate-y-0'} 
                flex flex-col justify-between border-b lg:border-r
            `}>
                <div className="bg-light-gray">
                    <div className="h-16 flex items-center px-6">
                        <img src={Logo} alt="CodeAnt AI logo" className="h-8" />
                        <h2 className="ml-3 text-lg font-semibold">CodeAnt AI</h2>
                    </div>


                    <div className="relative mt-6 items-center">
                        <button
                            className="flex items-center px-3 py-3 text-gray-700 hover:bg-gray-100 transition-colors w-full border round-lg"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <span className="mr-3">🔧</span>
                            <span>Org</span>
                            <ChevronDown className={`ml-auto transform ${isDropdownOpen ? 'rotate-180' : ''}`} size={20} />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute left-0 w-full bg-white border-t mt-1 shadow-lg">
                                <Link
                                    to="/codeant-ai/tools"
                                    className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    <span>Org 1</span>
                                </Link>
                                <Link
                                    to="/codeant-ai/tools"
                                    className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    <span>Org 2</span>
                                </Link>
                                <Link
                                    to="/codeant-ai/tools"
                                    className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    <span>Org 3</span>
                                </Link>
                            </div>
                        )}
                    </div>

                    <nav className="mt-6">
                        {menuItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="mr-3">{item.icon}</span>
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="px-6 py-3 lg:mt-6 mt-0 bg-light-gray">
                    <button
                        onClick={logout}
                        className="flex items-center gap-2 px-4 py-2 w-full text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                            />
                        </svg>
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </>
    );
}
