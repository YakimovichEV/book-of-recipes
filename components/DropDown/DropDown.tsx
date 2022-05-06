import React from "react";

export const DropDown: React.FC = () => {
    return (
        <div className="w-96">
            <select
                className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray600 bg-white bg-clip-padding bg-no-repeat border border-solid 
                    border-gray300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue600 focus:outline-none"
                aria-label="Default select example"
            >
                <option>Sorted by:</option>
                <option value="1">By name</option>
                <option value="2">By role</option>
            </select>
        </div>
    );
};
