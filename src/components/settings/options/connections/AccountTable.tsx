import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import KebabIcon from "assets/icons/tsx/KebabIcon";
import Table from "components/common/table/Table";
import LoadingBar from "components/common/loading/LoadingBar";
import { IndexNotionRequest, Integration, IntegrationPlatform } from "api/models";
import { Connection } from "utils/types";
import AddAccountDialog from "components/settings/options/connections/AddAccountDialog";

import AddAccountIcon from "assets/icons/svg/add-button.svg";
import PlusIcon from "assets/icons/tsx/PlusIcon";
import { useAppSelector } from "store";
import { userTokenSelector } from "store/user/userAuthSlice";
import { indexNotion } from "api";


type PropType = {
    platform: IntegrationPlatform,
    accounts: Integration[],
    connection: Connection,
    className?: string
}

const AccountTable = ({accounts, connection, className} : PropType) => {
    const handleEdit = () => {
        console.log("EDIT")
    }

    const handleDelete = () => {
        console.log("DELETE")
    }

    const handleIndex = async(account: Integration) => {
        const request: IndexNotionRequest = {
            email: account.email
        };

        // TESTING PURPOSES, WILL DO THIS ANOTHER
        const token = useAppSelector(userTokenSelector);
        switch(account.platform) {
            case IntegrationPlatform.Notion: {
                if(token) {
                    await indexNotion(token, request);
                }
            }
        }
    }

    const connectButton = () => {
        return (
            <div className="flex justify-center items-center m-auto">
                <PlusIcon className="
                w-4 h-4
                mr-2
                "/>
                <div>
                    connect new account
                </div>
            </div>
        );
    };

    return (
        <>
        <Table className={`w-full text-left border-separate  border-spacing-y-1.5 bg-ndex-light-background-2 dark:bg-ndex-dark-background-grey ${className}`}>
            <Table.Header className="h-0">
                <Table.HeaderRow>
                    <Table.HeaderCell className="w-full">
                    </Table.HeaderCell>
                    <Table.HeaderCell className="w-[50px]" />
                </Table.HeaderRow>
            </Table.Header>
            <Table.Body className="bg-ndex-light-background-2 border-separate dark:bg-ndex-dark-background-grey">
                {accounts.map((account : Integration) => {
                    return (
                    <Table.Row key={account.email} className="bg-ndex-light-table-default dark:bg-ndex-dark-background-default">
                        <Table.Cell className="
                        p-4 overflow-auto
                        rounded-tl-md rounded-bl-md
                        text-ndex-light-text-primary dark:text-ndex-dark-text-default">
                            {account.email}
                        </Table.Cell>
                        <Table.Cell className="
                        justify-center align-middle m-auto
                        rounded-br-md rounded-tr-md
                        ">
                            <Menu as="div">
                                <div>
                                    <Menu.Button className="flex w-full hover:opacity-50 active:opacity-30">
                                        <KebabIcon className="w-8 h-8
                                            stroke-ndex-light-text-primary
                                            rounded-lg
                                            dark:stroke-ndex-text-white"/>
                                    </Menu.Button>
                                </div>
                                <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute z-50 right-0 mt-2 w-32 origin-top-left divide-y bg-ndex-light-background-1 dark:bg-ndex-dark-background-default dark:divide-ndex-dark-background-grey rounded-md bg-ndex-dark-background-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="px-1 py-1 ">
                                            <Menu.Item>
                                                {({ active }) => (
                                                <button
                                                    onClick={() => handleIndex(account)}
                                                    className={`
                                                    bg-ndex-light-background-1 dark:bg-ndex-dark-background-default 
                                                    text-ndex-light-text-primary dark:text-white
                                                    ${active && 'hover:bg-ndex-light-background-2 hover:dark:bg-ndex-dark-background-default-selected'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    Index
                                                </button>
                                                )}
                                            </Menu.Item>
                                        </div>
                                        <div className="px-1 py-1 ">
                                            <Menu.Item>
                                                {({ active }) => (
                                                <button
                                                    onClick={handleEdit}
                                                    className={`
                                                    bg-ndex-light-background-1 dark:bg-ndex-dark-background-default 
                                                    text-ndex-light-text-primary dark:text-white
                                                    ${active && 'hover:bg-ndex-light-background-2 hover:dark:bg-ndex-dark-background-default-selected'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    Edit
                                                </button>
                                                )}
                                            </Menu.Item>
                                        </div>
                                        <div className="px-1 py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                <button
                                                    onClick={handleDelete}
                                                    className={`
                                                    bg-ndex-light-background-1 dark:bg-ndex-dark-background-default 
                                                    text-ndex-light-text-primary dark:text-white
                                                    ${active && 'hover:bg-ndex-light-background-2 hover:dark:bg-ndex-dark-background-default-selected'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    Delete
                                                </button>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </Table.Cell>
                    </Table.Row>
                    )
                })}
            </Table.Body>
        </Table>
        <AddAccountDialog
            buttonContent={connectButton()}
            buttonClassName={`
                rounded-lg w-full p-4 text-sm 
                font-bold
                stroke-ndex-light-text-primary dark:stroke-ndex-text-white
                text-ndex-light-text-primary dark:text-ndex-dark-text-default hover:text-ndex-dark-text-default
                bg-transparent hover:bg-ndex-button-bordered-green
                hover:border-1 hover:shadow-md 
                transition duration-250 ease-in-out
                `}
            buttonContainerClassName={
                `flex w-full`
            }
            connection={connection} />
        {/* <LoadingBar loading={false} className="w-full" /> */}
        </>
    )
}

export default AccountTable;