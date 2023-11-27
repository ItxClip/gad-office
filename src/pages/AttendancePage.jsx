import { useEffect, useState } from 'react'
import Navbar from "../components/Navbar/Navbar";
import Attendance from "../components/attendance/Attendance";

const AttendancePage = () => {
    const [excelFiles, setExcelFiles] = useState(null)
    useEffect(() => {
        const fetchFiles = async () => {
            const response = await fetch('http://localhost:4000/api/file')
            const json = await response.json()

            if (response.ok) {
                setExcelFiles(json)
                // Calls the update function to set the initial chart data
            }
        }
        fetchFiles()

        // setExcelFiles(local_data)
        // console.log(local_data)
    }, []);

    return ( 
        <div>
            <Navbar/>
            <Attendance excelFiles={excelFiles}/>
        </div> 
    );
}
export default AttendancePage;