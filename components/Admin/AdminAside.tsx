import React from "react";
import Link from "next/link";

export const AdminAside: React.FC = () => {
    return (
        <aside className="w-64 max-h-screen">
            <section className="py-2 border-b">
                <ul>
                    <li>
                        <Link href="/admin" passHref>
                            <a
                                href=""
                                className="flex items-center px-6 py-2 text-sm hover:bg-gray100"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 mr-6 text-red-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                                <span>Home</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="admin/users" passHref>
                            <a
                                href="#"
                                className="flex items-center px-6 py-2 text-sm hover:bg-gray100"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 mr-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                    />
                                </svg>
                                <span>Users</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="
                      flex
                      items-center
                      px-6
                      py-2
                      text-sm
                      hover:bg-gray100
                  "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                />
                            </svg>
                            <span>Products</span>
                        </a>
                    </li>
                </ul>
            </section>
            <section className="py-2 border-b">
                <ul>
                    <li>
                        <a
                            href="#"
                            className="
                      flex
                      items-center
                      px-6
                      py-2
                      text-sm
                      hover:bg-gray100
                  "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                                />
                            </svg>
                            <span>Report history</span>
                        </a>
                    </li>
                </ul>
            </section>
            <section className="py-2 border-b">
                <ul>
                    <li>
                        <a
                            href="#"
                            className="
                      flex
                      items-center
                      px-6
                      py-2
                      text-sm
                      hover:bg-gray100
                  "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <span>Settings</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="
                      flex
                      items-center
                      px-6
                      py-2
                      text-sm
                      hover:bg-gray100
                  "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>Help</span>
                        </a>
                    </li>
                </ul>
            </section>
            <section className="px-6 py-4 text-xs font-semibold space-y-4">
                <div>
                    <a href="#" className="mr-2">
                        About
                    </a>
                    <a href="#" className="mr-2">
                        Copyright
                    </a>
                    <a href="#" className="mr-2">
                        Contact us
                    </a>
                </div>
                <div>
                    <a href="#" className="mr-2">
                        Terms
                    </a>
                    <a href="#" className="mr-2">
                        Privacy
                    </a>
                    <a href="#" className="mr-2">
                        Policy & Safety
                    </a>
                </div>
                <div className="font-normal text-gray-500">
                    &copy; 2022 Zimaletto Industries
                </div>
            </section>
        </aside>
    );
};
