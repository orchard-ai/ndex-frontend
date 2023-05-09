import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import KebabIcon from "assets/icons/tsx/KebabIcon";
import { Account } from "utils/types";
import Table from "components/common/table/Table";
import LoadingBar from "components/common/loading/LoadingBar";
import { Integration, IntegrationPlatform } from "api/models";

type PropType = {
    platform: IntegrationPlatform,
    accounts: Integration[]
    className?: string
}

const AccountTable = ({accounts, className} : PropType) => {
    const handleEdit = () => {
        console.log("EDIT")
    }

    const handleDelete = () => {
        console.log("DELETE")
    }

    if(accounts.length == 0) {
        return (
            <div>

            </div>
        )
    }

    return (
        <>
        <Table className={`w-full text-left  border-separate  border-spacing-y-1.5 bg-ndex-light-background-2 dark:bg-ndex-dark-background-grey ${className}`}>
            <Table.Header className="h-0">
                <Table.HeaderRow>
                    <Table.HeaderCell className="w-full">
                    </Table.HeaderCell>
                    <Table.HeaderCell className="w-[50px]" />
                </Table.HeaderRow>
            </Table.Header>
            <Table.Body className="bg-ndex-light-background-2 border-separate  dark:bg-ndex-dark-background-grey">
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
                <Table.Row>
                    <LoadingBar loading={true} className="w-full" />
                </Table.Row>
            </Table.Body>
        </Table>
        </>
    )
}

export default AccountTable;