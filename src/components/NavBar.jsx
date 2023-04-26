import React from "react";
import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";
import {  Link } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: "Service Request",
      icon: "pi pi-fw pi-file",
      command: () => { navigate('/Serviceorder') }
    },
    {
      label: "Patient",
      icon: "pi pi-fw pi-pencil",
      command: () => { navigate('/form') }
    },
    {
      label: "Practitionar",
      icon: "pi pi-fw pi-user",
     
    },
    {
      label: "DiagnosticReports",
      icon: "pi pi-fw pi-calendar",
     
    },

  ];

  const start = (
    <Link to="/">
    <img
      alt="logo"
      src="https://shorturl.at/cfFG0"
      height="80"
      className="mr-2"
    ></img>
    </Link>
  );

  return (
    <>
      <div className="card">
        <Menubar model={items} start={start} className="bg-purple-900" />
      </div>
    </>
  );
};

export default NavBar;
