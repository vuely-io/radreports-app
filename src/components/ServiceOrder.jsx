import React from "react";
import { useState } from "react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router-dom";
import { InputTextarea } from "primereact/inputtextarea";
import Patient from "./modal/Patient";
import Provider from "./modal/Provider";

import { AutoComplete } from "primereact/autocomplete";


export default function ServiceOrder() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/uploadscan");
  }
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [value, setValue] = useState("");

  const countries = [
    { name: "Intracranial hemorrhage", code: "1386000" },
    { name: "ischemic stroke", code: "128608001" },
    { name: "Cerebral arterial aneurysm", code: "422504002" },
  ];

  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <img
            alt={option.name}
            src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
            className={`mr-2 flag flag-${option.code.toLowerCase()}`}
            style={{ width: "18px" }}
          />
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <img
          alt={option.name}
          src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
          className={`mr-2 flag flag-${option.code.toLowerCase()}`}
          style={{ width: "18px" }}
        />
        <div>{option.name}</div>
      </div>
    );
  };

  return (
    <>
      <div className="flex align-items-center justify-content-center mt-6">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
          <div className="text-center mb-5">
            <div className="text-900 text-3xl font-medium mb-3">
              Service Order
            </div>
          </div>

          <div>
            <div className="w-full ">
              <label className="block text-900 font-medium mb-2">
                Patient Id
              </label>
              <div className="w-full flex">
                <span className="p-float-label w-8 mb-3">
                  <AutoComplete
                    type="text"
                    className="w-full "
                    value={""}
                    onChange={""}
                    suggestions={""}
                    completeMethod={""}
                    inputId="ac"
                  />
                  <label htmlFor="ac">
                    {" "}
                    <i className="pi pi-search" />
                  </label>
                </span>
                <div className="block mb-3 w-2 ml-auto">
                  <Patient />
                </div>
              </div>
            </div>
            <div className="w-full ">
              <label className="block text-900 font-medium mb-2">
                Refering Physician
              </label>
              <div className="w-full flex">
                <span className="p-float-label w-8 mb-3">
                  <AutoComplete
                    type="text"
                    className="w-full "
                    value={""}
                    onChange={""}
                    suggestions={""}
                    completeMethod={""}
                    inputId="ac1"
                  />
                  <label htmlFor="ac1">
                    {" "}
                    <i className="pi pi-search" />
                  </label>
                </span>
                <div className="block mb-3 w-2 ml-auto">
                  <Provider />
                </div>
              </div>
            </div>

            <label className="block text-900 font-medium mb-3">
              Body part to be examined
            </label>
            <Dropdown
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.value)}
              options={countries}
              optionLabel="name"
              placeholder="Select a Body part"
              filter
              valueTemplate={selectedCountryTemplate}
              itemTemplate={countryOptionTemplate}
              className="w-full mb-3"
            />
            <label className="block text-900 font-medium mb-3">
              Reason for examination
            </label>
            <InputTextarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              rows={5}
              cols={30}
              className="w-full mb-3"
            />
            <div className="w-full flex">
              <Button
                label="Save"
                raised
                className="w-2 "
                onClick={handleClick}
              />

              <Button
                label="Cancel"
                raised
                severity="danger"
                className="w-2 ml-3 mr-4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
