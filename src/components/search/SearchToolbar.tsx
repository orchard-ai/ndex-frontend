import { useState } from "react";

import { connections } from "utils/constants"

type ConnectionFilter = {
    id: number
    name: string
    icon: string
    selected: boolean
}

const SearchToolbar = () => {
    const defaultConnectionFilter : ConnectionFilter[] = connections.map((connection, index) => {
        return {id: index, name: connection.name, icon: connection.icon, selected: false};
    })

    const [connectionFilters, setConnectionFilter] : [ConnectionFilter[], (value: ConnectionFilter[]) => void] = useState(
        defaultConnectionFilter
    );

    const updateFilter = (connection : string, index: number) => {
        console.log(connectionFilters);
        setConnectionFilter(
            connectionFilters.map((connectionFilter) => {
                return connectionFilter.id == index || connectionFilter.name == connection 
                ? {...connectionFilter, selected: !connectionFilter.selected}
                : connectionFilter
            }
        ))
    }

    return (
        <div className="flex w-full p-4 space-x-4 ">
            <p className="align-middle my-auto"> Searching in: </p>
            <button className="flex space-x-4 p-1">
                {connectionFilters.map((connection, index) => {
                    return (
                        <div className={`rounded-md p-1  
                            ${connection.selected ?  "bg-ndex-search-toolbar-icon-selected" : "hover:bg-ndex-search-toolbar-icon-hover"} 
                        `} 
                            onClick={() => updateFilter(connection.name, index)}
                        >
                            <img
                            className="h-6 w-6"
                            src={connection.icon}
                            />
                        </div>
                    )
                })
                }
            </button>
        </div>
    )
};

export default SearchToolbar;