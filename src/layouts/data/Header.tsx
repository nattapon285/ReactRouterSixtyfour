import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [nav, setNav] = useState(false);

    return (
        <header>
            <nav className="bg-white border-b border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow">
                <div className="flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex items-center">
                        <span className="text-xl font-semibold dark:text-white">
                            Logo
                        </span>
                    </Link>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={nav}
                            onClick={() => setNav(!nav)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <i className={`fa-solid ${nav ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div
                        className={`md:flex md:items-center w-full md:w-auto transition-all duration-300 ${nav
                            ? 'flex flex-col absolute top-14 left-0 w-full bg-white shadow-md p-4 md:static md:bg-transparent'
                            : 'hidden'
                            }`}
                    >
                        <ul className="flex flex-col md:flex-row md:gap-8 gap-4 md:items-center">
                            <li>
                                <Link
                                    to="/admin/home"
                                    className="block py-2 pr-4 pl-3 text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white transition md:px-2 md:py-0.5"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white transition md:px-2 md:py-0.5"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white transition md:px-2 md:py-0.5"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/sign-in"
                                    className="block py-2 pr-4 pl-3 text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white transition md:px-2 md:py-0.5"
                                >
                                    Sign In
                                </Link>
                            </li>
                        </ul>
                        <button
                            className="mt-4 md:mt-0 bg-slate-800 text-white py-2 px-4 rounded-full shadow hover:bg-slate-700 transition"
                            type="button"
                        >
                            Sign Up Now
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
