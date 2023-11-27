import { useEffect, useState } from 'react'
// import Attendance from '../components/attendance/Attendance'
// import Gender from '../components/Gender/Gender'
// import EventsComp from '../components/EventsComp/EventsComp'
import Navbar from '../components/Navbar/Navbar'
import 'boxicons';
import EventTable from '../components/DataTable/EventTable'


/**
 * Home component that renders the dashboard page
 * @returns {JSX.Element} The Home component
 */
const Home = () => {
    const [excelFiles, setExcelFiles] = useState(null)

    useEffect(() => {
        const fetchFiles = async () => {
            const response = await fetch('http://localhost:4000/api/file')
            const json = await response.json()

            if (response.ok) {
                setExcelFiles(json)
                console.log(json)
                // Calls the update function to set the initial chart data
            }
        }
        fetchFiles()

        // setExcelFiles(local_data)
        // console.log(local_data)
    }, []);

    return (
        <div className="home outline d-flex flex-column align-items-center align-content-center justify-content-center">
            <Navbar/>
            {/* <Attendance excelFiles={excelFiles} />
            {/* <Gender excelFiles={excelFiles} />
            <EventsComp excelFiles={excelFiles} /> */} 
            <EventTable excelFiles={excelFiles}/>
            
        </div>
    )
}

export default Home
