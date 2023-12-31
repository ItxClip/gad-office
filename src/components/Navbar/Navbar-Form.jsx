import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'boxicons';
import './import-form.css'
import { Link } from "react-router-dom";

const ModalImport = () => {
  const [show, setShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-header">
          <span>GAD OFFICE</span>
        </div>
        <div className="sidebar-icons">
        <Link to="/" ><box-icon name='home-alt-2' title="Table Logs"></box-icon></Link>
        <Link to="/attendace-graph" > <box-icon name='bar-chart'  title="Attendance"></box-icon></Link>
        <Link to="/gender-graph" > <box-icon name='line-chart-down' title="Gender"></box-icon></Link>
        <Link to="/events-graph" > <box-icon name='bar-chart-alt-2' title="Events"></box-icon></Link>
          <box-icon name='import' onClick={handleShow} title="Import"></box-icon>
          <box-icon name='export' title="Export"></box-icon>
          <div className="logout">
            <box-icon name='log-out' title="Logout"></box-icon>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Import files here:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="file-input">
            <form
              className="create"
              action="/api/file"
              encType="multipart/form-data"
              method="post"
            >
              <label>Event name:</label>
              <input
                type="text"
                name="eventName"
                placeholder='Event name'
              />
              <label>Import file:</label>
              <input
                type="file"
                name="csvFile"
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, .xlsm, .xlsb, .xltx"
              />
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalImport;
