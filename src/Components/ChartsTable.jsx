import React, { Component } from 'react';

export function ChartTable(props) {
    return (
        <div className={ChartTable}>
            <p>{props.examName}</p>
            <p>{props.gradePassedPercentage} </p>
            <p>{props.gradeFailedPercentage}</p>

            <p>{props.totalNExams}</p>
            <p>{props.totalPassedPercentage}</p>
            <p>{props.totalFailedPercentage}</p>
        </div>
    )
}
