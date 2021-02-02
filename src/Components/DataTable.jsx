import React from "react";
import { Table } from "@instructure/ui-table";

// @WHAT
// A table component which receives data as a prop. The data prop has dtype json object.
// The component renders the table for each entry in this data prop.
// @WHY
// Receiving a data prop and then rendering the table dynamically makes it very re-usable for
// when I want the table to display different data.
// @ALTERNATIVES
// Instead of using a hook component I could've made a class component.
// I haven't done this as react hooks provide coders to write code more efficiently.
// Class components need a bit more code than react hooks.

export  function DataTable({ data } ) {
    const columns = data[0] && Object.keys(data[0])

    return (
            <Table>
                <Table.Head>
                    <Table.Row>{data[0] && columns.map(heading => <Table.ColHeader>{heading}</Table.ColHeader>)}</Table.Row>
                </Table.Head>
                <Table.Body>
                    {data.map(row => <Table.Row>
                        {columns.map(column =>
                            <Table.Cell>
                                {typeof(row[column]) === "object" ?
                                    // Shows the voornaam and achternaam of the nested student object if
                                    // the parent component sends a fetch request to the /api/cijfer endpoint.
                                    row[column].voornaam + ' ' + row[column].achternaam
                                    :
                                    // if it doesn't contain an object-dtype it will render normally.
                                    row[column]}
                            </Table.Cell>)}
                    </Table.Row>)}
                </Table.Body>
            </Table>
)
    }