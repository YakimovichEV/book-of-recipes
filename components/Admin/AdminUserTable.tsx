import React from "react";

export const AdminUserTable: React.FC = () => {
    return (
        <div className="flex flex-col m-10 w-4/5">
            <div className="py-2 -my-2">
                <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray200 shadow sm:rounded-lg">
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray500 uppercase border-b border-gray200 bg-gray-50">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray500 uppercase border-b border-gray200 bg-gray-50">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray500 uppercase border-b border-gray200 bg-gray-50">
                                    Edit
                                </th>
                                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray500 uppercase border-b border-gray200 bg-gray-50">
                                    Delete
                                </th>
                            </tr>
                        </thead>

                        <tbody className="bg-white">
                            <tr>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray200">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 w-10 h-10">
                                            <img
                                                className="w-10 h-10 rounded-full"
                                                src="https://source.unsplash.com/user/erondu"
                                                alt="admin dashboard ui"
                                            />
                                        </div>

                                        <div className="ml-4">
                                            <div className="text-sm font-medium leading-5 text-gray-900">
                                                John Doe
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray200">
                                    <div className="text-sm leading-5 text-gray500">
                                        john@example.com
                                    </div>
                                </td>

                                <td className="px-6 py-4 text-sm leading-5 text-gray500 whitespace-no-wrap border-b border-gray200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-blue-400 cursor-pointer"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        />
                                    </svg>
                                </td>
                                <td className="px-6 py-4 text-sm leading-5 text-gray500 whitespace-no-wrap border-b border-gray200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-red-400 cursor-pointer"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray200">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 w-10 h-10">
                                            <img
                                                className="w-10 h-10 rounded-full"
                                                src="https://source.unsplash.com/user/erondu"
                                                alt="admin dashboard ui"
                                            />
                                        </div>

                                        <div className="ml-4">
                                            <div className="text-sm font-medium leading-5 text-gray-900">
                                                John Doe
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray200">
                                    <div className="text-sm leading-5 text-gray500">
                                        john@example.com
                                    </div>
                                </td>

                                <td className="px-6 py-4 text-sm leading-5 text-gray500 whitespace-no-wrap border-b border-gray200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-blue-400 cursor-pointer cursor-pointer cursor-pointer"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        />
                                    </svg>
                                </td>
                                <td className="px-6 py-4 text-sm leading-5 text-gray500 whitespace-no-wrap border-b border-gray200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-red-400 cursor-pointer"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray200">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 w-10 h-10">
                                            <img
                                                className="w-10 h-10 rounded-full"
                                                src="https://source.unsplash.com/user/erondu"
                                                alt="admin dashboard ui"
                                            />
                                        </div>

                                        <div className="ml-4">
                                            <div className="text-sm font-medium leading-5 text-gray-900">
                                                John Doe
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray200">
                                    <div className="text-sm leading-5 text-gray500">
                                        john@example.com
                                    </div>
                                </td>

                                <td className="px-6 py-4 text-sm leading-5 text-gray500 whitespace-no-wrap border-b border-gray200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-blue-400 cursor-pointer cursor-pointer cursor-pointer"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        />
                                    </svg>
                                </td>
                                <td className="px-6 py-4 text-sm leading-5 text-gray500 whitespace-no-wrap border-b border-gray200">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-red-400 cursor-pointer"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
