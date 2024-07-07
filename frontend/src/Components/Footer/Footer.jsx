import React from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom'
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


const Contact = ({ Name, icon  }) => {
    return (
         
      <div className="Contact">
        <div className="Aboutus-icon-wrapper">{icon}</div>
        <h3>{Name}</h3>
      </div>
    );
  };

const Footer = () => {
  return (
    <>
          <div className="info">
      <div className="info-icons">
        <Contact icon={<RiInstagramFill/>} Name="Instagram"/>
        <Contact icon={<FaSquareXTwitter/>} Name="FaceBook"/>
        <Contact icon={< FaFacebookSquare />} Name="Twitter"/>
        <div className='conclusion'>
    <h4>All rights reserved designed by Bridget Gitonga </h4>
  </div>
      </div>
  </div>
    </>
  )
}

export default Footer