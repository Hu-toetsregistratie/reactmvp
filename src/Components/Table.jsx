import React from "react";
import {Table} from '@instructure/ui-table';
import {Responsive} from '@instructure/ui-responsive';
import {Alert} from '@instructure/ui-alerts';
import { Pagination } from '@instructure/ui-pagination';
import { Link } from 'react-router-dom'
import {IconUserLine} from "@instructure/ui-icons";

class SortTabel extends React.Component {
    constructor (props) {
        super(props);
        //this.state = { id_row: 0 };
        //this.individualClick = this.individualClick.bind(this);
        const { headers } = props

        this.state = {
            sortBy: headers && headers[0] && headers[0].id,
            ascending: true,
        }
    }

    handleSort = (event, { id }) => {
        const { sortBy, ascending } = this.state

        if (id === sortBy) {
            this.setState({
                ascending: !ascending,
            })
        } else {
            this.setState({
                sortBy: id,
                ascending: true,
            })
        }
    }
    parentCallback(row_id){
        this.setState({s_id:row_id})
        console.log(row_id)
    }

    render() {
        const { caption, headers, rows,} = this.props
        const { sortBy, ascending } = this.state
        const direction = ascending ? 'ascending' : 'descending'
        const sortedRows = [...(rows || [])].sort((a, b) => {
            if (a[sortBy] < b[sortBy]) {
                return -1
            }
            if (a[sortBy] > b[sortBy]) {
                return 1
            }
            return 0
        })

        if (!ascending) {
            sortedRows.reverse()
        }
        return (

            <Responsive
                query={{
                    small: { maxWidth: '40rem' },
                    large: { minWidth: '41rem' },
                }}
                props={{
                    small: { layout: 'stacked' },
                    large: { layout: 'auto' },
                }}
            >
                {(props) => (
                    <div>
                        <Table
                            caption={`${caption}: sorted by ${sortBy} in ${direction} order`}
                            {...props}
                        >
                            <Table.Head renderSortLabel="Sort by">
                                <Table.Row>
                                    {(headers || []).map(({ id, text }) => (
                                        <Table.ColHeader
                                            key={id}
                                            id={id}
                                            onRequestSort={this.handleSort}
                                            sortDirection={id === sortBy ? direction : 'none'}
                                        >
                                            {text}
                                        </Table.ColHeader>
                                    ))}
                                </Table.Row>
                            </Table.Head>
                            <Table.Body>
                                {sortedRows.map((row) => (
                                    <Table.Row key={row.id}  onClick = {() => this.props.data.getIndividualRow(row.id)} >

                                        {headers.map(({ id, renderCell }) => (
                                            <Table.Cell key={id}>

                                                {renderCell ? renderCell(row[id]) : row[id]}


                                            </Table.Cell>

                                        ))}


                                    </Table.Row>

                                ))}
                            </Table.Body>
                        </Table>
                        <Alert
                            liveRegion={() => document.getElementById('flash-messages')}
                            liveRegionPoliteness="polite"
                            screenReaderOnly
                        >
                            {`Sorted by ${sortBy} in ${direction} order`}
                        </Alert>
                    </div >
                )}
            </Responsive>
        )
    }
}
export {SortTabel}
class PaginaTabel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 0,
        }
    }

    handleClick = (page) => {
        this.setState({
            page,
        })
    }

    handleSort = (event, options) => {
        const { onSort } = this.props

        this.setState({
            page: 0,
        })
        onSort(event, options)
    }

    render() {
        const { caption, headers, rows, sortBy, ascending, perPage } = this.props
        const { page } = this.state
        const startIndex = page * perPage
        const slicedRows = rows.slice(startIndex, startIndex + perPage)
        const pageCount = perPage && Math.ceil(rows.length / perPage)

        return (
            <div>
                <SortTabel
                    caption={caption}
                    headers={headers}
                    rows={slicedRows}
                    onSort={this.handleSort}
                    sortBy={sortBy}
                    ascending={ascending}
                    rowIds={rows.map((row) => row.id)}

                />
                {pageCount > 1 && (
                    <Pagination
                        variant='compact'
                        labelNext='Next Page'
                        labelPrev='Previous Page'
                        margin='large'
                    >
                        {Array.from(Array(pageCount), (item, index) => (
                            <Pagination.Page
                                key={index}
                                onClick={() => this.handleClick(index)}
                                current={index === page}
                            >
                                {index + 1}
                            </Pagination.Page>
                        ))}
                    </Pagination>
                )}
                <Alert
                    liveRegion={() => document.getElementById('flash-messages')}
                    liveRegionPoliteness="polite"
                    screenReaderOnly
                >
                    {`Table page ${page + 1} of ${pageCount}`}
                </Alert>

            </div>
        )
    }
}
export {PaginaTabel};