import Table from "components/common/table/Table";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import KebabIcon from "assets/icons/tsx/KebabIcon";

const AccountTable = ({className} : {className: string}) => {

    const handleEdit = () => {
        console.log("EDIT")
    }

    const handleDelete = () => {
        console.log("DELETE")
    }

    return (
      <Table className={`w-full p-4 border-separate border-spacing-0 text-left ${className}`}>
        <Table.Header>
            <Table.HeaderRow>
                <Table.HeaderCell className="w-[50%] md:w-[30%] p-4">
                    Email
                </Table.HeaderCell>
                <Table.HeaderCell className="w-[50%] md:w-[70%] p-4" />
                <Table.HeaderCell className="w-[50px] p-4" />
            </Table.HeaderRow>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Cell className="p-4 overflow-auto">
                    johnsmith@orchid.ai
                </Table.Cell>
                <Table.Cell className="p-4"/>
                <Table.Cell className="flex justify-center align-middle py-4">
                    <Menu as="div" className="inline-block">
                        <div>
                            <Menu.Button className="flex w-full hover:opacity-50 active:opacity-30">
                                <KebabIcon className="w-8 h-8"/>
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
                            <Menu.Items className="absolute z-50 right-0 mt-2 w-32 origin-top-left divide-y divide-ndex-background-1 rounded-md bg-ndex-background-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="px-1 py-1 ">
                                    <Menu.Item>
                                        {({ active }) => (
                                        <button
                                            onClick={handleEdit}
                                            className={`${
                                            active ? 'bg-ndex-background-2 text-ndex-text-grey' : 'text-white'
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
                                            className={`${
                                            active ? 'bg-ndex-background-2 text-ndex-text-grey' : 'text-white'
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
        </Table.Body>
      </Table>
    )
}

export default AccountTable;