import React, { useState } from "react";
import { Switch } from "@headlessui/react";

export const ToggleButton: React.FC = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? "bg-green" : "bg-gray"}
relative inline-flex flex-shrink-0 h-9 w-[73px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-300 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
            <span className="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                className={`${enabled ? "translate-x-9" : "translate-x-0"}
pointer-events-none inline-block h-8 w-8 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-300`}
            />
        </Switch>
    );
};
