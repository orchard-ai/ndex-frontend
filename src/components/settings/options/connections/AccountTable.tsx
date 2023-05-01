import Table from "components/common/table/Table";

const AccountTable = ({className} : {className: string}) => {
    return (
      <Table className={`w-full p-4 border-separate text-left ${className}`}>
        <Table.Header>
            <Table.HeaderRow>
                <Table.HeaderCell className="w-[50%] md:w-[30%] p-4">
                    Email
                </Table.HeaderCell>
                <Table.HeaderCell className="w-[50%] md:w-[70%] p-4">
                    Connections
                </Table.HeaderCell>
            </Table.HeaderRow>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Cell className="p-4 overflow-auto">
                    johnsmith@orchid.ai
                </Table.Cell>
                <Table.Cell className="p-4">
                    TEST
                </Table.Cell>
            </Table.Row>
        </Table.Body>
      </Table>
    )
}

export default AccountTable;