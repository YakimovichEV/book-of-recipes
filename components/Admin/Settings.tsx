import React from "react";

export const Settings: React.FC = () => {
    return (
        <form className="m-10 w-4/5">
            <div className="relative z-0 mb-6 w-full group">
                <input
                    type="email"
                    name="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray900 bg-transparent border-0 border-b-2 border-gray300 appearance-none dark:text-white dark:border-gray600 dark:focus:border-blue500 focus:outline-none focus:ring-0 focus:border-blue600 peer"
                    placeholder=" "
                    required
                />
                <label
                    htmlFor="floating_email"
                    className="absolute text-sm text-gray500 dark:text-gray400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue600 peer-focus:dark:text-blue500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Email address
                </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input
                    type="password"
                    name="floating_password"
                    id="floating_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray900 bg-transparent border-0 border-b-2 border-gray300 appearance-none dark:text-white dark:border-gray600 dark:focus:border-blue500 focus:outline-none focus:ring-0 focus:border-blue600 peer"
                    placeholder=" "
                    required
                />
                <label
                    htmlFor="floating_password"
                    className="absolute text-sm text-gray500 dark:text-gray400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue600 peer-focus:dark:text-blue500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Password
                </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input
                    type="password"
                    name="repeat_password"
                    id="floating_repeat_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray900 bg-transparent border-0 border-b-2 border-gray300 appearance-none dark:text-white dark:border-gray600 dark:focus:border-blue500 focus:outline-none focus:ring-0 focus:border-blue600 peer"
                    placeholder=" "
                    required
                />
                <label
                    htmlFor="floating_repeat_password"
                    className="absolute text-sm text-gray500 dark:text-gray400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue600 peer-focus:dark:text-blue500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Confirm password
                </label>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
                <div className="relative z-0 mb-6 w-full group">
                    <input
                        type="text"
                        name="floating_first_name"
                        id="floating_first_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray900 bg-transparent border-0 border-b-2 border-gray300 appearance-none dark:text-white dark:border-gray600 dark:focus:border-blue500 focus:outline-none focus:ring-0 focus:border-blue600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_first_name"
                        className="absolute text-sm text-gray500 dark:text-gray400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue600 peer-focus:dark:text-blue500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        First name
                    </label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input
                        type="text"
                        name="floating_last_name"
                        id="floating_last_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray900 bg-transparent border-0 border-b-2 border-gray300 appearance-none dark:text-white dark:border-gray600 dark:focus:border-blue500 focus:outline-none focus:ring-0 focus:border-blue600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_last_name"
                        className="absolute text-sm text-gray500 dark:text-gray400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue600 peer-focus:dark:text-blue500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Last name
                    </label>
                </div>
            </div>
            <button
                type="submit"
                className="text-white bg-blue700 hover:bg-blue800 focus:ring-4 focus:ring-blue300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue600 dark:hover:bg-blue700 dark:focus:ring-blue800"
            >
                Submit
            </button>
        </form>
    );
};
