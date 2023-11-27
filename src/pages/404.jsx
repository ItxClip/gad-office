import React from 'react';
import { Link } from "react-router-dom";
import './404.css'

const ErrorPage = () => {
  return (
    <>
      <div className='not-found'>
        <div className="mainbox">
          <div className="err">4</div>
          <div className="err1">0</div>
          <div className="err2">4</div>
          <div className="msg">
              Oops! It seems like you've ventured into the unknown. This page is playing hide and seek, but don't worry – we're experts at finding lost pages. Why not head <Link to="/" >back</Link> and start a new adventure?
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
