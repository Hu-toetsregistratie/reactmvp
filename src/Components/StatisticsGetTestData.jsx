// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2"; // might need it, might not
//
//
// export const GetTestResults = (props) => {
//     // react hook that gets the testresults of one test.
//     const [loading, setLoading ] = useState(true);
//     const [error, setError ] = useState(0);
//
//
//     const [ testData, setTestData ] = useState(null);
//     const [ nPassedGrades, setNPassedGrades ] = useState(null);
//     const [ nFailedGrades, setNFailedGrades ] = useState(null);
//
//     // followed these tutorials:
//     // https://www.polvara.me/posts/fetching-asynchronous-data-with-react-hooks/
//     // https://www.digitalocean.com/community/tutorials/how-to-call-web-apis-with-the-useeffect-hook-in-react
//     // for the async fetch
//
//     async function getData() {
//         try {
//             setLoading(true)
//             const response = await fetch('https://hu-toetsregistratie.nl/api/cijfer/?toets_code=2')
//             const data = response.json();
//             return data
//         } catch (e) {
//             console.log(e);
//         } finally {
//             setLoading(false)
//         }
//     }
//
//     useEffect(() => {
//         getData();
//     }, []);
//     console.log(getData)
//     return[testData]
//
// }