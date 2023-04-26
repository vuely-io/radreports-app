import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";

const Patient = () => {
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(null);

  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "Male", code: "NY" },
    { name: "Female", code: "RM" },
    { name: "Others", code: "LDN" },
  ];

  return (
    <div className="card flex justify-content-center">
      <Button label="New Patient" icon="" onClick={() => setVisible(true)} />
      <Dialog
        visible={visible}
        style={{ width: "80vw" }}
        onHide={() => setVisible(false)}
      >
        <div className="flex align-items-center justify-content-center mb-6">
          <div className="surface-card p-4 shadow-2 border-round w-full lg:w-10">
            <div className="text-center mb-5">
              <div className="text-900 text-3xl font-medium mb-3">
                New Patient Details
              </div>
            </div>

            <div>
              <div
                className="w-full"
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto auto",
                  gridGap: "20px",
                }}
              >
                <div className="w-full flex align-items-center">
                  <label className="text-900 font-medium ">First Name</label>

                  <InputText
                    type="text"
                    placeholder="First Name"
                    className="w-8 ml-auto mr-4"
                  />
                </div>
                <div className="w-full flex align-items-center">
                  <label className="text-900 font-medium ">Last Name</label>

                  <InputText
                    type="text"
                    placeholder="Last Name"
                    className="w-8 ml-auto mr-4"
                  />
                </div>
                <div className="w-full flex align-items-center">
                  <label className="text-900 font-medium ">Middle Name</label>

                  <InputText
                    type="text"
                    placeholder="Middle Name"
                    className="w-8 ml-auto mr-4"
                  />
                </div>
                <div className="flex align-items-center">
                  <label className="text-900 font-medium ">Date of birth</label>

                  <span className="p-float-label w-8 ml-auto mr-4">
                    <Calendar
                      value={date}
                      onChange={(e) => setDate(e.value)}
                      dateFormat="dd/mm/yy"
                      className="w-12"
                    />
                  </span>
                </div>
                <div className="flex align-items-center">
                  <label className="text-900 font-medium ">Sex</label>
                  <Dropdown
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
                    options={cities}
                    optionLabel="name"
                    placeholder="Select gender"
                    className="w-8 ml-auto mr-4"
                  />
                </div>
                <div></div>
                <div className="flex align-items-center">
                  <label className="text-900 font-medium ">Phone</label>
                  <InputText
                    keyfilter="int"
                    placeholder="Number"
                    className="w-8 ml-auto mr-4"
                  />
                </div>
                <div className="flex align-items-center">
                  <label className="text-900 font-medium ">Email</label>
                  <InputText
                    id="email"
                    placeholder="Email"
                    className="w-8 ml-auto mr-4"
                  />
                </div>
              </div>
              <div className="block mt-8">
                <div className="w-full block mt-10 flex">
                  <Button label="Save" raised className="w-2 " />
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
        </div>
      </Dialog>
    </div>
  );
};

export default Patient;
