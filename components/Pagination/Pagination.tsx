import React from "react";

export const Pagination: React.FC = () => {
    return (
        <ul className="inline-flex items-center px-6 py-1.5">
            <li>
                <a
                    href="#"
                    className="block py-2 px-3 ml-0 leading-tight text-gray500 bg-white rounded-l-lg border border-gray300 hover:bg-gray100 hover:text-gray600 dark:bg-[#464648] dark:border-gray600 dark:text-gray400 dark:hover:bg-gray600 dark:hover:text-white"
                >
                    <span className="sr-only">Previous</span>
                    <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </a>
            </li>
            <li>
                <a
                    href="#"
                    aria-current="page"
                    className="z-10 py-2 px-3 leading-tight text-blue600 border border-blue300 hover:text-blue700 hover:bg-slate-300 dark:border-gray600 dark:bg-gray600 dark:text-white dark:hover:text-white dark:hover:bg-gray600"
                >
                    1
                </a>
            </li>
            <li>
                <a
                    href="#"
                    className="py-2 px-3 leading-tight text-gray500 bg-white border border-gray300 hover:bg-gray100 hover:text-gray600 dark:bg-[#464648]  dark:border-gray600 dark:text-gray400 dark:hover:bg-gray600 dark:hover:text-white"
                >
                    2
                </a>
            </li>
            <li>
                <a
                    href="#"
                    className="py-2 px-3 leading-tight text-gray500 bg-white border border-gray300 hover:bg-gray100 hover:text-gray600 dark:bg-[#464648]  dark:border-gray600 dark:text-gray400 dark:hover:bg-gray600 dark:hover:text-white"
                >
                    3
                </a>
            </li>
            <li>
                <a
                    href="#"
                    className="py-2 px-3 leading-tight text-gray500 bg-white border border-gray300 hover:bg-gray100 hover:text-gray600 dark:bg-[#464648]  dark:border-gray600 dark:text-gray400 dark:hover:bg-gray600 dark:hover:text-white"
                >
                    4
                </a>
            </li>
            <li>
                <a
                    href="#"
                    className="py-2 px-3 leading-tight text-gray500 bg-white border border-gray300 hover:bg-gray100 hover:text-gray600 dark:bg-[#464648]  dark:border-gray600 dark:text-gray400 dark:hover:bg-gray600 dark:hover:text-white"
                >
                    5
                </a>
            </li>
            <li>
                <a
                    href="#"
                    className="block py-2 px-3 leading-tight text-gray500 bg-white rounded-r-lg border border-gray300 hover:bg-gray100 hover:text-gray600 dark:bg-[#464648]  dark:border-gray600 dark:text-gray400 dark:hover:bg-gray600 dark:hover:text-white"
                >
                    <span className="sr-only">Next</span>
                    <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </a>
            </li>
        </ul>
    );
};
