import React, { useState }  from 'react';
import { Table } from '@instructure/ui-table';

export function StatisticsTable(props) {
    let nStudents = props.nStudents;
    let nPassedGrades = props.nPassedGrades;
    let nFailedGrades = props.nFailedGrades;

    let nStudentsJaar1 = props.nStudentsJaar1;
    let nStudentsJaar2 = props.nStudentsJaar2;
    let nStudentsJaar3 = props.nStudentsJaar3;
    let nStudentsJaar4 = props.nStudentsJaar4;

    let nPassedGradesJaar1 = props.nPassedGradesJaar1;
    let nPassedGradesJaar2 = props.nPassedGradesJaar2;
    let nPassedGradesJaar3 = props.nPassedGradesJaar3;
    let nPassedGradesJaar4 = props.nPassedGradesJaar4;

    let nFailedGradesJaar1 = props.nFailedGradesJaar1;
    let nFailedGradesJaar2 = props.nFailedGradesJaar2;
    let nFailedGradesJaar3 = props.nFailedGradesJaar3;
    let nFailedGradesJaar4 = props.nFailedGradesJaar4;


    return (

        <div className={StatisticsTable}>
            {/*<p>{examName}</p>*/}
            {/*<p>{gradePassedPercentage} </p>*/}
            {/*<p>{gradeFailedPercentage}</p>*/}

            {/*<p>{totalNExams}</p>*/}
            {/*<p>{totalPassedPercentage}</p>*/}
            {/*<p>{totalFailedPercentage}</p>*/}

            <Table>
                <Table.Head>
                    <Table.Row>
                        <Table.ColHeader id="Studenten">Rank</Table.ColHeader>
                        <Table.ColHeader id="Voldoendes">Title</Table.ColHeader>
                        <Table.ColHeader id="Onvoldoendes">Year</Table.ColHeader>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    <Table.Row>
                        <Table.RowHeader>Totaal</Table.RowHeader>
                        <Table.Cell>{nStudents}</Table.Cell>
                        <Table.Cell>{nPassedGrades} </Table.Cell>
                        <Table.Cell>{nFailedGrades} </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.RowHeader>Jaar 1</Table.RowHeader>
                        <Table.Cell>{nStudentsJaar1}</Table.Cell>
                        <Table.Cell>{nPassedGradesJaar1}</Table.Cell>
                        <Table.Cell>{nFailedGradesJaar1}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.RowHeader>Jaar 2</Table.RowHeader>
                        <Table.Cell>{nStudentsJaar2}</Table.Cell>
                        <Table.Cell>{nPassedGradesJaar2}</Table.Cell>
                        <Table.Cell>{nFailedGradesJaar2}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.RowHeader>Jaar 3</Table.RowHeader>
                        <Table.Cell>{nStudentsJaar3}</Table.Cell>
                        <Table.Cell>{nPassedGradesJaar3}</Table.Cell>
                        <Table.Cell>{nFailedGradesJaar3}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.RowHeader>Jaar 4</Table.RowHeader>
                        <Table.Cell>{nStudentsJaar4}</Table.Cell>
                        <Table.Cell>{nPassedGradesJaar4}</Table.Cell>
                        <Table.Cell>{nFailedGradesJaar4}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}