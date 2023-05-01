export interface TableProps  {
    children?: React.ReactNode
    className?: string
 } 

const Header = ({children, className} : TableProps) => {
    return (
        <thead className={`${className}`} >
            {children}
        </thead>
    )
}

const HeaderRow = ({children, className} : TableProps) => {
    return (
        <tr className={`${className} bg-ndex-table-header`} >
            {children}
        </tr>
    )
}

const HeaderCell = ({children, className} : TableProps) => {
    return (
        <th className={`${className}`} > 
            {children}
        </th>
    )
}

const Row = ({children, className} : TableProps) => {
    return (
        <tr className={`${className} bg-ndex-table-row`} >
            {children}
        </tr>
    )
}

const Cell = ({children, className} : TableProps) => {
    return (
        <td className={`${className}`} >
            {children}
        </td>
    )
}

const Body = ({children, className} : TableProps) => {
    return (
        <tbody className={`${className}`}>
            {children}
        </tbody>
    )
}

const Table = ({children, className} : TableProps) => {
    return (
        <table className={`table-fixed bg-ndex-table-default ${className}`}>
            {children}
        </table>
    )
}

Table.Header = Header;
Table.HeaderRow = HeaderRow;
Table.HeaderCell = HeaderCell;
Table.Row = Row;
Table.Cell = Cell;
Table.Body = Body;

export default Table;