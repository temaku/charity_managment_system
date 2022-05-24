
import { useEffect, useState } from 'react';

import { classNames } from '../shared';
import './shared.css'

export const StatusPill = ({ value, id }) => {

    const status = value ? value.toLowerCase() : "unknown";
    const [activeStatus, setActiveStatus] = useState(false)


    const handleStatusChange = () => {
        setActiveStatus(!activeStatus)
    }

    return (
        <div className="flex relative justify-start items-start">
            <span
                onClick={handleStatusChange}
                className={
                    classNames(
                        "px-7 py-1 uppercase leading-wide font-bold text-xs cursor-pointer",
                        status.startsWith("active") ? " text-green-800 outline outline-offset-1 outline-1" : null,
                        status.startsWith("on") ? " text-yellow-800 outline outline-offset-1 outline-1" : null,
                        status.startsWith("disconnected") ? " text-red-800 outline outline-offset-1 outline-1" : null
                    )
                }
            >
                {activeStatus ? "DEACTIVATE" : "ACTIVATE"}
            </span>
        </div>
    );
};
