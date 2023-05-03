import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PlusIcon from "assets/icons/svg/plus-icon.svg";

import { ROUTES, connections } from "utils/constants"

type ConnectionFilter = {
    id: number
    name: string
    icon: string
    selected: boolean
}

const SearchToolbar = () => {
    const navigate = useNavigate();

    const defaultConnectionFilter : ConnectionFilter[] = connections.map((connection, index) => {
        return {id: index, name: connection.name, icon: connection.icon, selected: true};
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
            <p className="align-middle my-auto text-ndex-text-grey"> searching in: </p>
            <button className="flex space-x-4 p-1">
                {connectionFilters.map((connection, index) => {
                    return (
                        <div className={`rounded-md p-1 active:bg-ndex-search-toolbar-icon-active
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
                <div className={`rounded-md p-1 bg-ndex-search-toolbar-icon-selected active:bg-ndex-search-toolbar-icon-active`}
                    onClick={() => navigate(ROUTES.SETTINGS)}
                >
                    <img
                        className="h-6 w-6"
                        src={PlusIcon}
                    />
                </div>
            </button>
        </div>
    )
};

export default SearchToolbar;