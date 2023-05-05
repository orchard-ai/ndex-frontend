import LinkButton from "components/common/LinkButton";
import Logo from "components/common/Logo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES, connections } from "utils/constants"


type Connection = {
    id: number,
    name: string,
    description: string,
    href: string,
    icon: string,
    alt: string,
    detailedDescription: string
}

const AddFirstConnection = () => {
    const navigate = useNavigate();

    const Card = ({connection}:{connection: Connection}) => {
       return (
            <div className="flex flex-col justify-between w-[100%] h-64 p-8 bg-ndex-light-background-1 border-2 rounded-lg shadow-md
                dark:bg-ndex-dark-background-grey
                dark:text-ndex-dark-text-default
                dark:border-none">
                <div className="flex">
                    <img
                        className="h-8 w-8 p-1"
                        src={connection.icon}
                    />
                    <div className="align-middle text-md my-auto hidden sm:block">
                        {connection.name}
                    </div>
                </div>
                <div>
                    {connection.description}
                </div>
                <LinkButton
                    className="
                        rounded-lg p-3 text-sm text-ndex-text-white bg-ndex-button-bordered-green shadow-md mx-auto
                        hover:bg-ndex-button-bordered-green-hover
                        transition duration-200 ease-in-out"
                    href={connection.href}
                >
                    add account
                </LinkButton>
            </div>
        );
    };

    const onSkipPress = () => {
        navigate(ROUTES.SEARCH);
    };

    return (
        <div className="flex flex-col h-screen bg-ndex-light-background-1 dark:bg-ndex-dark-background-default py-5 items-center ">
            <div className="flex flex-row justify-between items-center px-10 w-full">
                <Logo/>
                <button className="items-center justify-center rounded-lg w-20 h-10 mr-4 text-center dark:text-ndex-dark-text-default
                    hover:bg-ndex-light-background-2
                    dark:hover:bg-ndex-dark-background-default-selected
                    active:bg-ndex-dark-background-4
                    transition duration-200 ease-in-out"
                    onClick={onSkipPress}
                >
                    skip
                </button>
            </div>
            <div className="text-ndex-light-text-primary dark:text-ndex-dark-text-default text-lg font-semibold my-10">
                Integrate with your first platform
            </div>
            <div className="flex-col w-1/2 items-center justify-center grid grid-cols-1 sm:grid-cols-2 gap-10">
                {connections.map((connection : Connection) => {
                    return (
                        <Card connection={connection} />
                    )
                })}
            </div>
        </div>
    );
}


export default AddFirstConnection;