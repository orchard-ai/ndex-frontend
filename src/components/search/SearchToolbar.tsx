import { useState } from "react";

import { connections } from "utils/constants"

const SearchToolbar = () => {
    const [connectionFilter, setConnectionFilter] = useState([]);

    return (
        <div className="flex w-full p-4 space-x-4 shadow-none">
            <div> Searching in: </div>
            <div className="flex space-x-4">
                {connections.map((connection) => {
                    return (
                        <div>
                            <img
                            className="h-6 w-6"
                            src={connection.icon}
                            />
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
};

export default SearchToolbar;