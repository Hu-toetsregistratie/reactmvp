import React, { Component } from "react";
import { Table } from "@instructure/ui-table";
import { Flex } from "@instructure/ui-flex";

export  function DataTable({ data } ) {
    const columns = data[0] && Object.keys(data[0])
    return (
        <div>
            <Flex>
                <Table>
                    <Table.Head>
                        <Table.Row>{data[0] && columns.map(heading => <Table.ColHeader>{heading}</Table.ColHeader>)}</Table.Row>
                    </Table.Head>
                    <Table.Body>
                        {data.map(row => <Table.Row>
                            {columns.map(column =>
                                <Table.Cell>{row[column]}</Table.Cell>)}
                        </Table.Row>)}
                    </Table.Body>
                </Table>
            </Flex>
        </div>
    )
}