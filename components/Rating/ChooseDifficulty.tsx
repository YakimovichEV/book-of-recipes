import React from "react";

export const ChooseDifficulty: React.FC = () => {
    return (
        <div className="flex flex-col xl:flex-row xl:items-center">
            <div className="flex items-center my-2 xl:my-0">
                <input
                    type="checkbox"
                    className="w-10 h-10 rounded-full bg-white text-menthol cursor-pointer border-gray border-4 focus:ring-0 focus:ring-offset-0 2xl:w-12 2xl:h-12 mr-3"
                />
                <label className="form-check-label inline-block text-menthol">
                    Easy
                </label>
            </div>
            <div className="flex items-center mb-2 xl:mb-0 xl:mx-3">
                <input
                    type="checkbox"
                    className="w-10 h-10 rounded-full bg-white text-orange-400 cursor-pointer border-gray border-4 focus:ring-0 focus:ring-offset-0 2xl:w-12 2xl:h-12 mr-3"
                />
                <label className="form-check-label inline-block text-orange-400">
                    Medium
                </label>
            </div>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    className="w-10 h-10 rounded-full bg-white text-red-500 cursor-pointer border-gray border-4 focus:ring-0 focus:ring-offset-0 2xl:w-12 2xl:h-12 mr-3"
                />
                <label className="form-check-label inline-block text-red-500">
                    Hard
                </label>
            </div>
        </div>
    );
};
