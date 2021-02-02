import React, { useState, useEffect} from "react";
import { DataTable } from "../Components/DataTable"


export function DataTableView() {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("")

    // @WHAT: useCallBack() function
    // @WHY: reading https://dmitripavlutin.com/dont-overuse-react-usecallback/
    // @ALTERNATIVES: don't use useCallBack and write the fetch as a regular async fetch function.

    // @WHAT: A get request to the API.
    // @WHY: To get the data for our datatable.
    // @ALTERNATIVES: Make an APIHandler component and make a call there.
    // I have tried to make an API-handler component before but I never got it to work properly.
    // So here we are.

    // Fetches the data of tests. I chose to use this api endpoint because dynamically filtering in the front-end of an application
    // takes a much longer time. If I tried to use the /api/cijfer.json endpoint my browser would nearly crash.
    const fetchData = async() => {
        let response = await fetch('https://hu-toetsregistratie.nl/api/toets.json')
        let json = await response.json()
        console.log(json)
        return setData(json)
    }

    // Makes an API call when the page is rendered.
    useEffect(() => {
        fetchData()
    }, [])

    // Matches the user input with the data and renders only what matches.
    function Search(rows) {
        const columns = rows[0] && Object.keys(rows[0]);
        return rows.filter((row) =>
            columns.some(
                (column) => row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
            )
        );
    }

    return <div>

        <div>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>

        <div> <DataTable data={Search(data)}/></div>
    </div>
}

// @WHAT: React.memo(), a memoizing method in reactjs
// @WHY: it can improve performance by memoizing certain components. If a change is made to one row then .memo() makes sure to only render the changed data (?)
// @ALTERNATIVES: not using the .memo() method
// @SRC: general information about React.memo(): https://dmitripavlutin.com/use-react-memo-wisely/
// @SRC2: applying React.memo() on a datatable: https://www.saltycrane.com/blog/2019/03/how-to-usememo-improve-performance-react-table/
//
// export const MemoizedDataTableView = React.memo(DataTableView)
