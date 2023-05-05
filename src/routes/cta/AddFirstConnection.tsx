import { useState } from "react";
import { connections } from "utils/constants"


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

    const Card = ({connection}:{connection: Connection}) => {
       return (
        <div className="w-[90%] p-4 bg-white">
            <div>
                {connection.name}
            </div>
            <div>
                Connection Description
            </div>
            <div>
                Add Button
            </div>
        </div>)
    }

    return (
    <div className="flex flex-col items-center  justify-center">
       {connections.map((connection : Connection) => {
            return (
                <Card connection={connection} />
            )
       })}
    </div>
    )
}


export default AddFirstConnection;