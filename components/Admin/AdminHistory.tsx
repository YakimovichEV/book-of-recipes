import React from "react";

export const AdminHistory: React.FC = () => {
    return (
        <div className="m-10 w-3/5">
            <h1 className="text-3xl font-medium">Past Incidents</h1>
            <div className="my-8">
                <h2 className="text-xl font-medium">February, 2022</h2>
                <hr className="border border-gray300 my-3" />
                <p className="text-lg">No incidents reported.</p>
            </div>
            <div className="my-8">
                <h2 className="text-xl font-medium">January, 2022</h2>
                <hr className="border border-gray300 my-3" />
                <p className="text-lg">No incidents reported.</p>
            </div>
        </div>
    );
};
