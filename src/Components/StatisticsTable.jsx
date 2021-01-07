import React  from 'react';

export function StatisticsTable(props) {
    return (
        <div className={StatisticsTable}>
            <p>{props.examName}</p>
            <p>{props.gradePassedPercentage} </p>
            <p>{props.gradeFailedPercentage}</p>

            <p>{props.totalNExams}</p>
            <p>{props.totalPassedPercentage}</p>
            <p>{props.totalFailedPercentage}</p>
        </div>
    )
}
