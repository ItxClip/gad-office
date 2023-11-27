import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import 'boxicons';
import './table.css'


const EventTable = ({excelFiles}) => {
     // Calculate counts for Male, Female, and Prefer Not To Say for each event
     const eventData = excelFiles
     ? excelFiles.reduce((accumulator, file) => {
         const eventName = file.eventName;
         const createdAt = new Date(file.createdAt);

         if (!isNaN(createdAt.getTime())) {
             // Check if createdAt is a valid date
             if (!accumulator[eventName]) {
             accumulator[eventName] = {
                 eventName,
                 createdAt: `${createdAt.toLocaleDateString('en-US', {
                 month: 'long',
                 day: 'numeric',
                 year: 'numeric',
                 })} ${createdAt.toLocaleTimeString('en-US', {
                 hour: 'numeric',
                 minute: 'numeric',
                 })}`,
                 maleCount: 0,
                 femaleCount: 0,
                 preferNotToSayCount: 0,
             };
             }

             // Update counts based on gender
             if (file.sex === 'Male') {
             accumulator[eventName].maleCount += 1;
             } else if (file.sex === 'Female') {
             accumulator[eventName].femaleCount += 1;
             } else if (file.sex === 'Prefer not to say') {
             accumulator[eventName].preferNotToSayCount += 1;
             }
         }

         return accumulator;
         }, {})
     : {};

     const uniqueEvents = Object.values(eventData);

     const columns = [
         { name: 'Event Name', selector: 'eventName', sortable: true},
         { name: 'Created At', selector: 'createdAt', sortable: true, minWidth: '250px'},
         { name: 'Male', selector: (row) => row.maleCount, sortable: true },
         { name: 'Female', selector: (row) => row.femaleCount, sortable: true },
         {
         name: 'PFS',
         selector: (row) => row.preferNotToSayCount,
         sortable: true,
         },
         // Add more columns as needed
         {
         name: 'Action',
         cell: (row) => (
             <button className="icon-button" onClick={() => handleDelete(row)}><box-icon name='trash'></box-icon><box-icon name='edit-alt'></box-icon><box-icon name='archive-in'></box-icon></button>
             
         ),
         },
     ];

     const handleDelete = (row) => {
         // Add your delete logic here using the row data
         console.log('Delete button clicked for row:', row);
     };

    return ( 
        <div className="eventlist">
            <DataTable
            title="Event Table"
            columns={columns}
            data={uniqueEvents}
            pagination
            highlightOnHover
            
            customStyles={{
                headRow: {
                style: {
                    borderBottom: '2px solid black',
                    background: 'white', // Set the background color for the header row
                },
                },
                headCells: {
                style: {
                    color: 'black', // Set the text color for the header cells
                },
                },
            }}
            />
        </div>

     );
}
 
export default EventTable;